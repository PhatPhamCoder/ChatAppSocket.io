const Rooms = function (room) {
  (this.roomName = room.roomName),
    (this.created_at = room.created_at),
    (this.updated_at = room.updated_at);
};

module.exports = Rooms;
