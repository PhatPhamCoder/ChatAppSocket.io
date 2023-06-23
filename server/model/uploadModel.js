const Image = function (image) {
  (this.userId = image.userId),
    (this.receiverId = image.receiverId),
    (this.filename = image.filename),
    (this.created_at = image.created_at);
};

module.exports = Image;
