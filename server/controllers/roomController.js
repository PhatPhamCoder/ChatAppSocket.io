const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const tableRoom = "tbl_room";
const tableParticipant = "tbl_participant";
const tableUser = "tbl_user";
const roomService = require("../services/roomService");
const Rooms = require("../model/RoomModel");
const Participants = require("../model/participantModel");

// Create Room
const createRoom = async (req, res) => {
  try {
    const { roomName } = req.body;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [{ msg: constantNotify.ERROR_DB }],
        });
      }
      // Check room exist
      conn.query(
        `SELECT * FROM ${tableRoom} WHERE roomName = ?`,
        roomName,
        (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          if (dataRes.length !== 0) {
            return res.send({
              result: false,
              error: [{ msg: `Phòng ${constantNotify.ALREADY_EXISTS}` }],
            });
          }
          if (dataRes.length === 0) {
            const room = new Rooms({
              roomName: roomName,
              created_at: Date.now(),
            });
            delete room.updated_at;
            // Create room
            roomService.createRoom(room, (err, res_) => {
              if (err) {
                return res.send({
                  result: false,
                  error: [err],
                });
              }
              return res.send({
                result: true,
                data: { msg: constantNotify.ADD_DATA_SUCCESS },
              });
            });
          }
        },
      );
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

// Get Room By Id
const getRoomById = async (req, res) => {
  try {
    const userId = req.params.id;
    // const roomName = req.query.roomname;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [{ msg: constantNotify.ERROR_DB }],
        });
      }
      conn.query(
        `SELECT roomId,roomName FROM ${tableParticipant} WHERE userId = ${userId}`,
        (err, dataRes) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          if (dataRes.length === 0) {
            return res.send({
              result: false,
              error: [{ msg: `Người dùng không thuộc phòng nào!` }],
            });
          }
          if (dataRes.length !== 0) {
            const data = dataRes.map((item) => {
              return {
                roomId: item.roomId,
                roomName: item.roomName,
              };
            });
            return res.send({
              result: true,
              data: data,
            });
          }
        },
      );
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

// Join Room
const joinRoom = async (req, res) => {
  try {
    const { userId, roomName } = req.body;
    db.getConnection((err, conn) => {
      if (err) {
        return res.send({
          result: false,
          error: [{ msg: constantNotify.ERROR_DB }],
        });
      }
      // Check user on Room
      conn.query(
        `SELECT * FROM ${tableParticipant} WHERE userId = ${userId} AND roomName = "${roomName}"`,
        (err, data) => {
          if (err) {
            return res.send({
              result: false,
              error: [err],
            });
          }
          if (data.length !== 0) {
            return res.send({
              result: false,
              error: [{ msg: `Người dùng đã trong phòng` }],
            });
          }
          if (data.length === 0) {
            // Check user exists
            conn.query(
              `SELECT id FROM ${tableUser} WHERE id = ${userId}`,
              (err, dataRes) => {
                if (err) {
                  return res.send({
                    result: false,
                    error: [err],
                  });
                }
                if (dataRes.length === 0) {
                  return res.send({
                    result: false,
                    error: [{ msg: `Người dùng ${constantNotify.NOT_FOUND}` }],
                  });
                }
                if (dataRes.length !== 0) {
                  // check room exists
                  conn.query(
                    `SELECT id,roomName FROM ${tableRoom} WHERE roomName = "${roomName}"`,
                    (err, dataRes_) => {
                      if (err) {
                        return res.send({
                          result: false,
                          error: [err],
                        });
                      }
                      if (dataRes_.length === 0) {
                        return res.send({
                          result: false,
                          error: [{ msg: `Phòng ${constantNotify.NOT_FOUND}` }],
                        });
                      }
                      // console.log(dataRes_[0]?.roomName === roomName);
                      if (dataRes_.length !== 0) {
                        if (dataRes_[0]?.roomName === roomName) {
                          const participant = new Participants({
                            userId: userId,
                            roomId: dataRes_[0]?.id,
                            roomName: roomName,
                            joined_date: Date.now(),
                            created_at: Date.now(),
                          });
                          delete participant.left_date;
                          delete participant.updated_at;

                          roomService.JoinRoom(participant, (err, res_) => {
                            if (err) {
                              return res.send({
                                result: false,
                                error: [err],
                              });
                            }
                            return res.send({
                              result: true,
                              data: { msg: constantNotify.JOIN_SUCCESS },
                            });
                          });
                        } else {
                          return res.send({
                            result: false,
                            error: [
                              {
                                msg: `Không tìm thấy phòng có tên ${roomName}`,
                              },
                            ],
                          });
                        }
                      }
                    },
                  );
                }
              },
            );
          }
        },
      );
      conn.release();
    });
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

// leave Room
const leaveRoom = async (req, res) => {
  try {
    const userId = req.query.userId;
    const roomName = req.query.roomName;

    if (userId && roomName) {
      db.getConnection((err, conn) => {
        if (err) {
          return res.send({
            result: false,
            error: [{ msg: constantNotify.ERROR }],
          });
        }
        conn.query(
          `SELECT id FROM ${tableRoom} WHERE name = ?`,
          roomName,
          (err, dataRes) => {
            if (err) {
              return res.send({
                result: false,
                error: [{ msg: constantNotify.ERROR }],
              });
            }
            if (dataRes.length === 0) {
              return res.send({
                result: false,
                error: [{ msg: `Room ${constantNotify.NOT_FOUND}` }],
              });
            }
            if (dataRes.length !== 0) {
              if (!dataRes[0].id) {
                return res.send({
                  result: false,
                  error: [{ msg: `Room ID is ${constantNotify.NOT_FOUND}` }],
                });
              }
              conn.query(
                `SELECT id FROM ${tableParticipant} WHERE userId = ${userId} AND roomId = ${dataRes[0].id}`,
                (err, dataRes_) => {
                  if (err) {
                    return res.send({
                      result: false,
                      error: [{ msg: constantNotify.ERROR }],
                    });
                  }
                  if (dataRes_.length === 0) {
                    return res.send({
                      result: false,
                      error: [
                        {
                          msg: `Nguời dùng ${constantNotify.NOT_FOUND} trong phòng`,
                        },
                      ],
                    });
                  }
                  if (dataRes_.length !== 0) {
                    if (!dataRes_[0].id) {
                      return res.send({
                        result: false,
                        error: [
                          { msg: `Nguời dùng ${constantNotify.NOT_FOUND}` },
                        ],
                      });
                    }
                    //   console.log(dataRes_[0].id, participant);
                    roomService.leaveRoom(dataRes_[0].id, (err, res_) => {
                      if (err) {
                        return res.send({
                          result: false,
                          error: [{ msg: constantNotify.ERROR }],
                        });
                      }
                      return res.send({
                        result: true,
                        msg: constantNotify.DELETE_DATA_SUCCESS,
                      });
                    });
                  }
                },
              );
            }
          },
        );
        conn.release();
      });
    }
  } catch (error) {
    return res.send({
      result: false,
      error: [{ msg: error }],
    });
  }
};

module.exports = { createRoom, joinRoom, leaveRoom, getRoomById };
