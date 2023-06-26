const Participants = function (participant) {
  (this.userId = participant.userId),
    (this.roomId = participant.roomId),
    (this.roomName = participant.roomName),
    (this.joined_date = participant.joined_date),
    (this.left_date = participant.left_date),
    (this.created_at = participant.created_at),
    (this.updated_at = participant.updated_at);
};

module.exports = Participants;
