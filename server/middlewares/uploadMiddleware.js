const multer = require("multer");
const path = require("path");
const fs = require("fs");
// Đường dẫn lưu hình ảnh
const dirImage = "./public/images";
const dirThumb = "./public/thumb";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.params.id);
    // Check folder upload is created ?
    if (
      !fs.existsSync(`${dirImage}/${req.params.id}`) &&
      !fs.existsSync(`${dirThumb}/${req.params.id}`)
    ) {
      fs.mkdirSync(`${dirImage}/${req.params.id}`, { recursive: true });
      fs.mkdirSync(`${dirThumb}/${req.params.id}`, { recursive: true });
    }

    // Chấp nhận các định dạng sau (Check dưới client)
    // var math = ["image/png", "image/jpeg", "image/jpg"];
    // if (math.indexOf(file.mimetype) === -1) {
    //   let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png or xlsx.`;
    //   return cb(errorMess, null);
    // }

    cb(null, `${dirImage}/${req.params.id}`);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "_" +
        "room" +
        "_" +
        uniqueSuffix +
        path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fieldSize: 200000 }, //Limit fileSize: 2MB
});

module.exports = upload;
