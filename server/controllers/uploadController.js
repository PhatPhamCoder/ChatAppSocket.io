const constantNotify = require("../utils/constanNotify");
const db = require("../model/connectDb");
const tableImages = "tbl_images";

const fs = require("fs");
const sharp = require("sharp");
const Image = require("../model/uploadModel");
const uploadService = require("../services/uploadService");
const Messages = require("../model/messagesModel");

const directoryPath = __dirname + "/public/images/";
const directoryThumb = __dirname + "/public/thumb/";

// Upload image
const uploadImage = async (req, res) => {
  try {
    const id = req.params.id;
    const receiverId = req.params.receiverId;
    if (!req.file) {
      return res.send({
        result: false,
        error: [{ msg: constantNotify.VALIDATE_FILE }],
      });
    }
    if (req.file.size <= 2000000) {
      // console.log(req.file.path);
      const imageName = req?.file?.filename;
      // console.log("Check Image name::", imageName);
      await sharp(req.file.path)
        .resize({ width: 150, height: 150 })
        .toFile(`public/thumb/` + `${id}/` + req?.file?.filename, (err) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }

          const messages = new Messages({
            senderID: id,
            userTo: receiverId,
            filename: imageName,
            created_at: Date.now(),
          });
          delete messages?.message;
          delete messages?.roomID;

          uploadService.upload(messages, (err, res_) => {
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
        });
    } else {
      return res.send({
        result: false,
        error: [{ msg: constantNotify.VALIDATE_FILE_SIZE }],
      });
    }
  } catch (error) {
    return res.send({
      result: false,
      error: [error],
    });
  }
};

// getAllImage
const getAllImages = async (req, res) => {
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
        `SELECT userId,receiverId,filename FROM ${tableImages} WHERE userId = ${from} OR userId = ${to}`,
        (err, dataRes) => {
          if (err) {
            // console.error(err);
            return res.send({
              result: false,
              error: [err],
            });
          }
          // console.log(dataRes);
          if (dataRes.length === 0) {
            console.log("Không tìm thấy data của người dùng");
            return;
          }
          if (dataRes.length !== 0) {
            const dataOfSender = dataRes.map((img) => {
              return {
                fromSelf: img?.receiverId === to,
                receiverId: img?.receiverId,
                filename: img?.filename,
              };
            });
            // console.log(dataOfSender);
            return res.send({
              result: true,
              data: dataOfSender,
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

module.exports = { uploadImage, getAllImages };
