import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 3 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.setLocalAccessToken = async (token) => {
  window.localStorage.setItem("accessToken", token);
};

instance.getLocalAccessToken = async () => {
  return window.localStorage.getItem("accessToken")
    ? window.localStorage.getItem("accessToken")
    : null;
};

instance.setLocalRefreshToken = async (refreshToken) => {
  window.localStorage.setItem("refreshToken", refreshToken);
};

instance.getLocalRefreshToken = async () => {
  return window.localStorage.getItem("refreshToken")
    ? window.localStorage.getItem("refreshToken")
    : null;
};

/**Xử lí trước khi gửi lên server */
instance.interceptors.request.use(
  async (config) => {
    // console.log("Trước khi request:::");
    /**Không cần kiểm tra accessToken đối với 2 router này: nếu kiểm tra sẽ chạy hàm đệ quy */
    if (
      config.url.indexOf("auth/login") >= 0 ||
      config.url.indexOf("auth/refresh-token") >= 0
    ) {
      return config;
    }

    // const token = await instance.getLocalAccessToken();
    config.headers["X-Token"] = await instance.getLocalAccessToken();
    // console.log("Trước khi request xuống server::", token);

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

/**Xử lí sau khi từ server response */
instance.interceptors.response.use(
  async (response) => {
    // console.log("Sau khi server Response:::", response.data);
    const config = response.config;
    const { code, msg } = response.data;
    if (code && code === 401) {
      if (msg && msg === "jwt expired") {
        // console.log("Trường hợp token hết hạn");
        /**Step 1 */
        const { newAccessToken, newRefreshToken } = await refreshToken();
        if (newAccessToken && newRefreshToken) {
          //   console.log(":::Đã lấy lại accessToken thành công:::");
          /**Step 2 */
          config.headers["X-Token"] = newAccessToken;
          /**Step 3 */
          await instance.setLocalAccessToken(newAccessToken);
          await instance.setLocalRefreshToken(newRefreshToken);
          return instance(config);
        }
      }
    }
    return response;
  },
  (err) => {
    // Handle errors
    return Promise.reject(err);
  },
);

async function refreshToken() {
  const refreshToken = await instance.getLocalRefreshToken();
  //   console.log("Check RefreshToken trước khi gửi lên server:::", refreshToken);
  const dataRefresh = {
    refreshToken: refreshToken,
  };
  return (await instance.post("auth/refresh-token", dataRefresh)).data;
}

export const axiosUpload = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export default instance;
