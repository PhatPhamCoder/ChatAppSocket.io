import socketIOClient from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:5000";

export const socket = socketIOClient.connect(URL);
