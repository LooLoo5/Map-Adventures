const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  message: String,
  team: String,
  // replies: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Replies"
  // }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
