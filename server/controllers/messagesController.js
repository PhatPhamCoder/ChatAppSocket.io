const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const Messages = require("../model/messagesModel");
const tableChat = "tbl_chat";

const addMessage = async (req, res) => {
  try {
    const { from, to, message, roomId } = req.body;

    if (roomId && !to) {
      db.getConnection((err, conn) => {
        if (err) {
          return res.send({
            result: flase,
            error: [{ msg: constantNotify.ERROR_DB }],
          });
        }
        const messages = new Messages({
          senderID: from,
          roomId: roomId,
          message: message,
          created_at: Date.now(),
        });
        delete messages?.userTo;
        delete messages?.filename;
        if (message) {
          conn.query(
            `INSERT INTO ${tableChat} SET roomId = ?,senderID = ?, message = ?, created_at = ?`,
            [
              messages.roomId,
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
        conn.release();
      });
    }

    if (!roomId && to) {
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
    }
  } catch (error) {
    return res.send({
      result: fals,
      error: [{ msg: error }],
    });
  }
};

const addMessageRoom = async (req, res) => {
  try {
    const { from, message, roomId } = req.body;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: flase,
          error: [{ msg: constantNotify.ERROR_DB }],
        });
      }
      const messages = new Messages({
        senderID: from,
        roomId: roomId,
        message: message,
        created_at: Date.now(),
      });
      delete messages?.userTo;
      delete messages?.filename;
      // console.log(messages);
      if (message) {
        conn.query(
          `INSERT INTO ${tableChat} SET roomId = ?,senderID = ?, message = ?, created_at = ?`,
          [
            messages.roomId,
            messages.senderID,
            messages.message,
            messages.created_at,
          ],
          (err, res_) => {
            if (err) {
              console.error(err);
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
      }
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: fals,
      error: [{ msg: error }],
    });
  }
};

const getAllMessage = async (req, res) => {
  try {
    const { from, to } = req.body;
    const limit = 20;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [err],
        });
      }
      conn.query(
        `SELECT message,senderID,userTo,filename FROM ${tableChat} WHERE senderID = ${from} OR senderID = ${to} ORDER BY created_at DESC LIMIT 0,${limit}`,
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

const getMessageRoom = async (req, res) => {
  try {
    const { from, roomId } = req.body;
    // console.log({ from, roomId });
    if (from && roomId) {
      db.getConnection((err, conn) => {
        if (err) {
          return res.send({
            result: false,
            error: [err],
          });
        }
        conn.query(
          `SELECT message,senderID,roomId,filename FROM ${tableChat} WHERE roomId = ${roomId}`,
          (err, dataRes) => {
            if (err) {
              return res.send({
                result: false,
                error: [{ msg: constantNotify.ERROR_DB }],
              });
            }

            const dataMsgOfSender = dataRes.map((msg) => {
              return {
                fromSelf: msg?.senderID === from,
                senderID: msg?.senderID,
                message: msg?.message,
                image: msg?.filename,
              };
            });
            return res.send({
              result: true,
              data: dataMsgOfSender,
            });
          },
        );
        conn.release();
      });
    }
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

module.exports = { addMessage, getAllMessage, getMessageRoom, addMessageRoom };
