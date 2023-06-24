const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
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
        senderID: from,
        userTo: to,
        message: message,
        created_at: Date.now(),
      });
      delete messages?.roomID;
      delete messages?.filename;
      if (messages) {
        conn.query(
          `INSERT INTO ${tableChat} SET userTo = ?,senderID = ?, message = ?, created_at = ?`,
          [
            messages.userTo,
            messages.senderID,
            messages.message,
            messages.created_at,
          ],
          (err, res_) => {
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
          },
        );
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
        `SELECT message,senderID,userTo,filename FROM ${tableChat} WHERE senderID = ${from} OR senderID = ${to}`,
        (err, dataRes) => {
          if (err) {
            // console.error(err);
            return res.send({
              result: false,
              error: [err],
            });
          }
          if (dataRes.length === 0) {
            console.log("Không tìm thấy data của người dùng");
            return;
          }
          if (dataRes.length !== 0) {
            const dataMsgOfSender = dataRes.map((msg) => {
              return {
                fromSelf: msg?.userTo === to,
                sendto: msg?.userTo,
                sendFrom: msg?.senderID,
                message: msg?.message,
                image: msg?.filename,
              };
            });
            return res.send({
              result: true,
              data: dataMsgOfSender,
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
