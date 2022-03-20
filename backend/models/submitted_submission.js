const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let submittedSubmissionsSchema = new Schema(
  {
    User_id: {
      type: String,
    },
    Submission_name: {
      type: String,
    },
    Module_id: {
      type: String,
    },
    Date_time: {
      type: String,
    },
  },
  { timestamps: true }
);

let Submitted_submission = mongoose.model("submitted_submission", submittedSubmissionsSchema);

module.exports = Submitted_submission;