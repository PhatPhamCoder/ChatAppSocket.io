const express = require("express");
const socket = require("socket.io");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
const compression = require("compression");
const userRoutes = require("./routes/userRoute");
const messagesRoutes = require("./routes/messagesRoute");
const uploadRoutes = require("./routes/uploadRoute");
const roomRoutes = require("./routes/roomRoute");
const { userJoin, getCurrentUser } = require("./utils/userSocket");

app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/rooms", roomRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running port ${process.env.PORT}`);
});

/**Config Socket.io */
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const sockets = new Map();

io.on("connection", (socket) => {
  console.log("A User Connected::", socket.id);
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    sockets.set(userId, socket.id);
  });
  socket.on("join-room", ({ room, userId }) => {
    console.log(`Data socket id::${userId} with roomID::${room}`);
    const user = userJoin(userId, room);
    socket.join(user.room);
    socket.on("Send-message-room", (msg) => {
      console.log("check mesage from client::", msg);
      console.log("check userId from client::", userId);
      const user = getCurrentUser(userId);
      io.to(user.room).emit("recieve-message-room", msg.msg); //All user can view
    });
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = sockets.get(data?.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });

  socket.on("disconnect", () => {});
});
