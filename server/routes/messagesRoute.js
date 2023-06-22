const {
  addMessage,
  getAllMessage,
} = require("../controllers/messagesController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

const router = require("express").Router();

router.post("/add-message/", verifyToken, addMessage);
router.post("/get-all-message", verifyToken, getAllMessage);

module.exports = router;
