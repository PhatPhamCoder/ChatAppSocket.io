const tableName = "tbl_images";
const tableChat = "tbl_chat";
const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const fs = require("fs");

// Upload
exports.upload = async (data, result) => {
  try {
    const query = `INSERT INTO ${tableChat} SET userTo = ?,senderID = ?, filename = ?, created_at = ?`;
    db.query(
      query,
      [data.userTo, data.senderID, data.filename, data.created_at],
      (err, dataRes) => {
        if (err) {
          return result({ msg: constantNotify.ERROR }, null);
        }

        result(null, dataRes.insertId);
      },
    );
  } catch (error) {
    result({ msg: error }, null);
  }
};

exports.uploadRoom = async (data, result) => {
  try {
    const query = `INSERT INTO ${tableChat} SET roomId = ?,senderID = ?, filename = ?, created_at = ?`;
    db.query(
      query,
      [data.roomId, data.senderID, data.filename, data.created_at],
      (err, dataRes) => {
        if (err) {
          return result({ msg: constantNotify.ERROR }, null);
        }

        result(null, dataRes.insertId);
      },
    );
  } catch (error) {
    result({ msg: error }, null);
  }
};
