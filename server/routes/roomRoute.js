const {
  createRoom,
  joinRoom,
  leaveRoom,
  getRoomById,
} = require("../controllers/roomController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

const router = require("express").Router();

router.post("/create-room", verifyToken, createRoom);
router.post("/join-room", joinRoom);
router.delete("/leave-room", leaveRoom);
router.get("/get-room/:id", getRoomById);

module.exports = router;
