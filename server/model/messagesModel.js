const Messages = function (message) {
  (this.roomID = message.roomID),
    (this.userFrom = message.userFrom),
    (this.userTo = message.userTo),
    (this.senderID = message.senderID),
    (this.message = message.message),
    (this.created_at = message.created_at);
};

module.exports = Messages;
