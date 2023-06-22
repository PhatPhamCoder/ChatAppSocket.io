const {
  Register,
  Login,
  refreshToken,
  getAllUsers,
  getUser,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

router.get("/allusers/:id", verifyToken, getAllUsers);
router.get("/user/:id", verifyToken, getUser);

router.post("/refresh-token", refreshToken);

module.exports = router;
