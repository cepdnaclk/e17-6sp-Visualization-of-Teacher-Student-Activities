// models/UserClusters.js

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let newSchema = new Schema(
  {
    User: {
        type: String,
    },
    ForumParticipation: {
      type: String,
    },
    ForumView: {
      type: String,
    },
    Assessment: {
      type: String,
    },
    Resource: {
      type: String,
    },
    Clusters: {
        type: Number,
    },
  },
  { timestamps: true }
);

let userClusters = mongoose.model("user_with_clusters", newSchema);

module.exports = userClusters;