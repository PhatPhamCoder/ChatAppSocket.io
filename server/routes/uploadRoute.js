const { verifyToken } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const {
  getAllImages,
  uploadImage,
} = require("../controllers/uploadController");

const router = require("express").Router();

router.post("/:id/:receiverId", upload.single("image"), uploadImage);

router.post("/get-all-images", verifyToken, getAllImages);

module.exports = router;
