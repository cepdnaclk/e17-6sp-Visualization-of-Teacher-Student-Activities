const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let summarySubmissionsSchema = new Schema(
    {
        Submission_name: {
            type: String,
        },
        Date: {
            type: String,
        },
        Count: {
            type: Number,
        },
    },
    { timestamps: true }
);

let Summary_submission = mongoose.model("summary_submission", summarySubmissionsSchema);

module.exports = Summary_submission;