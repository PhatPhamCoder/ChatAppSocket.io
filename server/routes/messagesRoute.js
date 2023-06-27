const {
  addMessage,
  getAllMessage,
  getMessageRoom,
  addMessageRoom,
} = require("../controllers/messagesController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

const router = require("express").Router();

router.post("/add-message", verifyToken, addMessage);
router.post("/add-message-room", verifyToken, addMessageRoom);
router.post("/get-all-message", verifyToken, getAllMessage);
router.post("/get-all-message-room", verifyToken, getMessageRoom);

module.exports = router;
