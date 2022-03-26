// models/Post.js

// Test schema for DB(test)
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let systemSchema = new Schema({
    logRecords: {
        type: String,
    },
    users: {
        type: String,
    },
    courseID: {
        type: String,
    },
}, { timestamps: true });

let System = mongoose.model("systems", systemSchema);

module.exports = System;