const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const tableRoom = "tbl_room";
const tableParticipant = "tbl_participant";

/**Create Room */
const createRoom = async (data, result) => {
  try {
    const query = `INSERT INTO ${tableRoom} SET ?`;
    db.query(query, data, (err, dataRes) => {
      if (err) {
        result({ msg: constantNotify.ERROR }, null);
      }
      result(null, dataRes.insertId);
    });
  } catch (error) {
    result({ msg: error }, null);
  }
};

/**Join Room */
const JoinRoom = async (data, result) => {
  try {
    const query = `INSERT INTO ${tableParticipant} SET ?`;
    db.query(query, data, (err, dataRes) => {
      if (err) {
        result({ msg: constantNotify.ERROR }, null);
      }
      result(null, dataRes.insertId);
    });
  } catch (error) {
    result({ msg: error }, null);
  }
};

/**Leave Room */
const leaveRoom = async (id, result) => {
  try {
    const query = `DELETE FROM ${tableParticipant} WHERE ${tableParticipant}.id = ?`;
    db.query(query, id, (err, dataRes) => {
      if (err) {
        return result({ msg: constantNotify.ERROR }, null);
      }

      if (dataRes.affectedRows === 0) {
        return result({ msg: `ID ${constantNotify.NOT_EXITS}` });
      }
      result(null, dataRes);
    });
  } catch (error) {
    result({ msg: error }, null);
  }
};

module.exports = {
  createRoom,
  JoinRoom,
  leaveRoom,
};
