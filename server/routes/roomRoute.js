const {
  createRoom,
  joinRoom,
  leaveRoom,
  getRoomById,
} = require("../controllers/roomController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

const router = require("express").Router();

router.post("/create-room", verifyToken, createRoom);
router.post("/join-room", verifyToken, joinRoom);
router.delete("/leave-room", leaveRoom);
router.get("/get-room/:id", verifyToken, getRoomById);

module.exports = router;
