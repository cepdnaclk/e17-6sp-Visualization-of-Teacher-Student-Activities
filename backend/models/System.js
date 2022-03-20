// models/Post.js

// Test schema for DB(test)
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let systemSchema = new Schema({
    nooflogrecords: {
        type: String,
    },
    noofusers: {
        type: String,
    },
    courseid: {
        type: String,
    },
}, { timestamps: true });

let System = mongoose.model("systems", systemSchema);

module.exports = System;