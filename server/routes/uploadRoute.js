const upload = require("../middlewares/uploadMiddleware");

const {
  uploadImage,
  uploadImageRoom,
} = require("../controllers/uploadController");
const uploadRoom = require("../middlewares/uploadRoomMiddleware");

const router = require("express").Router();

router.post("/:id/:receiverId", upload.single("image"), uploadImage);

router.post(
  "/room/:id/:receiverId",
  uploadRoom.single("image"),
  uploadImageRoom,
);

// router.get("/get-all-images", verifyToken, getAllImages);
// router.get("/get-all-images-room", getAllImagesRoom);

module.exports = router;
