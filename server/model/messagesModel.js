const Messages = function (message) {
  (this.roomID = message.roomID),
    (this.userTo = message.userTo),
    (this.senderID = message.senderID),
    (this.message = message.message),
    (this.filename = message.filename),
    (this.created_at = message.created_at);
};

module.exports = Messages;
