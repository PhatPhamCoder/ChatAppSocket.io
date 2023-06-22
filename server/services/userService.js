const db = require("../model/connectDb");
const constantNotify = require("../utils/constanNotify");
const tableUser = "tbl_user";

const Register = async (data, result) => {
  try {
    const query = `INSERT INTO ${tableUser} SET ?`;
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

module.exports = {
  Register,
};
