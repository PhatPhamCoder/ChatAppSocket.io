const users = [];

function userJoin(id, room) {
  const user = { id, room };

  users.push(user);

  return user;
}

function User(id) {
  const userInfo = { id };

  users.push(userInfo);

  return userInfo;
}

// Get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

// Leave chat
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  User,
};
