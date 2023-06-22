const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const {
  signAccesToken,
  signRefreshToken,
} = require("../middlewares/jwtMiddleware");
const Messages = require("../model/messagesModel");
const tableChat = "tbl_chat";

const addMessage = async (req, res) => {
  try {
    const { from, to, message } = req.body;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [err],
        });
      }
      const messages = new Messages({
        message: message,
        senderID: from,
        userFrom: from,
        userTo: to,
        created_at: Date.now(),
      });
      if (messages) {
        conn.query(`INSERT INTO ${tableChat} SET ?`, messages, (err, res_) => {
          if (err) {
            return res.send({
              result: false,
              error: [{ msg: constantNotify.ERROR }],
            });
          }
          return res.send({
            result: true,
            data: { msg: constantNotify.ADD_DATA_SUCCESS },
          });
        });
        conn.release();
      }
    });
  } catch (error) {
    return res.send({
      result: fals,
      error: [{ msg: error }],
    });
  }
};

const getAllMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [err],
        });
      }
      conn.query(
        `SELECT senderID,userTo,message FROM tbl_chat WHERE senderID = ${from} OR senderID = ${to} ORDER BY created_at ASC`,
        (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          // console.log("Check dataRes:::", dataRes);
          if (dataRes.length > 0) {
            const dataMessages = dataRes?.map((msg) => {
              return {
                fromSelf: msg?.senderID === from,
                message: msg?.message,
              };
            });
            // console.log(dataMessages);
            return res.send({
              result: true,
              data: dataMessages,
            });
          }
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

module.exports = { addMessage, getAllMessage };
