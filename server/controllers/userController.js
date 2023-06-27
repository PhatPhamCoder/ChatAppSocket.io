const bcrypt = require("bcrypt");
const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const User = require("../model/userModel");
const userService = require("../services/userService");
const jwtDecode = require("jwt-decode");
const JWT = require("jsonwebtoken");
const { networkInterfaces } = require("os");
const {
  signAccesToken,
  signRefreshToken,
} = require("../middlewares/jwtMiddleware");
const tableUser = "tbl_user";

const Register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [err],
        });
      }

      conn.query(
        `SELECT email FROM ${tableUser} WHERE email = ?`,
        email,
        async (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          if (dataRes.length > 0) {
            return res.send({
              result: false,
              error: [{ msg: `Email ${constantNotify.ALREADY_EXISTS}` }],
            });
          }
          if (dataRes.length === 0) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const user = new User({
              username: username,
              email: email,
              password: hashPassword,
              active: 1,
              created_at: Date.now(),
            });
            delete updated_at;
            userService.Register(user, (err, res_) => {
              if (err) {
                return res.send({
                  result: false,
                  error: [{ msg: constantNotify.ERROR }],
                });
              }
              return res.send({
                result: true,
                data: {
                  msg: constantNotify.REGISTER_SUCCESS,
                },
              });
            });
          }
        },
      );
    });
  } catch (error) {
    return res.send({
      result: fals,
      error: [{ msg: error }],
    });
  }
};

const Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [err],
        });
      }
      conn.query(
        `SELECT id,username,email,password FROM ${tableUser} WHERE username = ?`,
        username,
        async (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }

          const comparePassword = await bcrypt.compare(
            password,
            dataRes?.[0].password,
          );

          if (!comparePassword) {
            return res.send({
              result: false,
              error: [{ msg: constantNotify.PASS_FAILD }],
            });
          }

          const data = {
            userId: dataRes[0].id,
            username: dataRes[0].username,
          };

          const _token = await signAccesToken(data);
          const _refreshToken = await signRefreshToken(data);

          const updateToken = `UPDATE ${tableUser} SET refresh_token = ?, active = 2 WHERE id = ?`;
          conn.query(
            updateToken,
            [_refreshToken, dataRes[0]?.id],
            (err, dataRes_) => {
              // console.log(dataRes_);
              if (err) {
                return result({ msg: constantNotify.ERROR }, null);
              }
              if (dataRes_.length !== 0) {
                return res.send({
                  result: true,
                  data: {
                    msg: constantNotify.LOGIN_SUCCESS,
                    userId: dataRes[0].id,
                    accessToken: _token,
                    refreshToken: _refreshToken,
                  },
                });
              }
            },
          );
        },
      );
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: fals,
      error: [{ msg: error }],
    });
  }
};

const refreshToken = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  const decodeToken = jwtDecode(refreshToken.slice(0, refreshToken.length - 1));
  const userId = decodeToken?.userId;

  await JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err) => {
    if (err) {
      const query = `UPDATE ${tableUser} SET refresh_token = 0 WHERE id = ${userId}`;
      db.query(query, (err) => {
        if (err) {
          return res.send({ msg: constantNotify.ERROR }, null);
        }
        db.query(
          `SELECT email FROM ${tableUser} WHERE id = ?`,
          userId,
          async (err, data_) => {
            if (err) {
              return res.send({ msg: constantNotify.ERROR }, null);
            }
            if (data_[0]?.email) {
              const nets = networkInterfaces();
              const results = {};

              for (const name of Object.keys(nets)) {
                for (const net of nets[name]) {
                  const familyV4Value =
                    typeof net.family === "string" ? "IPv4" : 4;
                  if (net.family === familyV4Value && !net.internal) {
                    if (!results[name]) {
                      results[name] = [];
                    }
                    results[name].push(net.address);
                  }
                }
              }

              const dataSendEmail = {
                to: data_[0]?.email,
                text: "Hey user",
                subject: "[OPTECH] CẢNH BÁO ĐĂNG NHẬP BẤT THƯỜNG CHAT APP",
                html: `Hi bạn,
                    Chúng tôi nghi ngờ tài khoản của bạn đăng nhập bất thường tại địa chỉ IP: ${
                      results["Wi-Fi"][0] || results["Ethernet"][0]
                    }
                    Bạn vui lòng đăng nhập hệ thống và đổi mật khẩu để bảo vệ tài khoản!
                    `,
              };

              await sendEmail(dataSendEmail);
            }
          },
        );
      });
      return res.send({
        result: false,
        error: [err],
      });
    }

    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [err],
        });
      }

      conn.query(
        `SELECT id,username,refresh_token FROM ${tableUser} WHERE refresh_token LIKE "%${refreshToken}%"`,
        async (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          if (dataRes.length === 0) {
            const query = `UPDATE ${tableUser} SET refresh_token = 0 WHERE id = ${userId}?`;
            conn.query(query, (err) => {
              if (err) {
                return res.send({ msg: constantNotify.ERROR });
              }
            });
          }

          if (dataRes && dataRes.length > 0) {
            const dataRefresh = {
              userId: dataRes[0].id,
              username: dataRes[0].username,
            };
            const _token = await signAccesToken(dataRefresh);
            const _refreshToken = await signRefreshToken(dataRefresh);

            /**update RefreshToken at DB */
            const updateToken = `UPDATE ${tableUser} SET refresh_token = ? WHERE id = ?`;
            conn.query(updateToken, [_refreshToken, userId], (err) => {
              if (err) {
                return res.send({ msg: constantNotify.ERROR });
              }
            });
            return res.send({
              result: true,
              newAccessToken: _token,
              newRefreshToken: _refreshToken,
            });
          }
        },
      );
      conn.release();
    });
  });
};

const getAllUsers = async (req, res, next) => {
  try {
    const id = req.params.id;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [{ msg: constantNotify.ERROR }],
        });
      }
      conn.query(
        `SELECT id,username,email FROM ${tableUser} WHERE id <> ?`,
        id,
        (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          // console.log("Check data get All:::", dataRes);
          if (dataRes && dataRes.length > 0) {
            return res.send({
              result: true,
              data: dataRes,
            });
          }
        },
      );
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id);
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [{ msg: constantNotify.ERROR }],
        });
      }
      conn.query(
        `SELECT id,username,email FROM ${tableUser} WHERE id = ?`,
        id,
        (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          // console.log("Check data get All:::", dataRes);
          if (dataRes && dataRes.length > 0) {
            return res.send({
              result: true,
              dataRes,
            });
          }
        },
      );
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

module.exports = { Register, Login, refreshToken, getAllUsers, getUser };
