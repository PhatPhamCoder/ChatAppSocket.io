const express = require("express");
const socket = require("socket.io");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const app = express();
const fs = require("fs");

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
    origin: process.env.REACT_APP,
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const sockets = new Map();

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    sockets.set(userId, socket.id);
  });

  socket.on("join-room", ({ room, userId }) => {
    console.log(`Data socket id::${userId} with roomID::${room}`);
    const user = userJoin(userId, room);
    socket.join(user.room);
  });

  socket.on("Send-message-room", (msg) => {
    const user = getCurrentUser(msg?.from);
    socket.to(user.room).emit("recieve-message-room", msg);
  });
  socket.on("send-msg", (data) => {
    const sendUserSocket = sockets.get(data?.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });

  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

/**Config Socket.io End*/
