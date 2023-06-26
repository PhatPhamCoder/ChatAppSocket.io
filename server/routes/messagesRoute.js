const {
  addMessage,
  getAllMessage,
  getMessageRoom,
  addMessageRoom,
} = require("../controllers/messagesController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

const router = require("express").Router();

router.post("/add-message", addMessage);
router.post("/add-message-room", addMessageRoom);
router.post("/get-all-message", getAllMessage);
router.post("/get-all-message-room", getMessageRoom);

module.exports = router;
