const User = function (user) {
  (this.username = user.username),
    (this.email = user.email),
    (this.password = user.password),
    (this.roomID = user.roomID),
    (this.active = user.active),
    (this.created_at = user.created_at),
    (this.updated_at = user.updated_at);
};

module.exports = User;
