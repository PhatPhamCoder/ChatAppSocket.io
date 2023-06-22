const JWT = require("jsonwebtoken");
require("dotenv").config();

const signAccesToken = async (data) => {
  const token = await JWT.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return token;
};
const signRefreshToken = async (data) => {
  const token = await JWT.sign(data, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "3d",
  });

  return token;
};

const verifyToken = async (req, res, next) => {
  try {
    if (req.headers["x-token"]) {
      const token = req.headers["x-token"];
      // console.log(`Token is ::${token}`);
      const payload = await JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = payload;
      return next();
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(200).json({
        code: 401,
        msg: error.message,
      });
    }
    return res.status(200).json({
      code: 500,
      msg: error,
    });
  }
};

module.exports = { verifyToken, signAccesToken, signRefreshToken };
