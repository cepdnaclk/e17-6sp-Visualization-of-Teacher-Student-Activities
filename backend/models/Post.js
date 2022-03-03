// models/Post.js

// Test schema for DB(test)
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    time: {
      type: String,
    },
    component: {
        type: String,
    },
    event_name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;