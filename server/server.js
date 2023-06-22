const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const socket = require("socket.io");
const userRoutes = require("./routes/userRoute");
const messagesRoutes = require("./routes/messagesRoute");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/messages", messagesRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const sockets = new Map();

io.on("connection", (socket) => {
  // console.log("A User Connected::", socket.id);
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    sockets.set(userId, socket.id);
  });
  socket.on("join_room", (dataRoom) => {
    socket.join(dataRoom);
  });

  socket.on("Send_message", (data) => {
    console.log(`Check data from client:::`, data);
    // console.log(data);
    // io.to(data.room).emit("recieve_message", data); //All user can view
    //socket.to(data.room).emit("recieve_message", data); //All user can view except sender
  });

  socket.on("send-msg", (data) => {
    // console.log(data);
    const sendUserSocket = sockets.get(data?.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });

  socket.on("disconnect", () => {
    // console.log("User Disconnected::", socket.id);
    // socket.emit("offline", "User busy");
  });
});
