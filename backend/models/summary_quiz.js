const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let summaryQuizSchema = new Schema({
    Module_ID: {
        type: String,
    },
    Quiz_name: {
        type: String,
    },
    No_of_students_submitted: {
        type: String,
    },
    No_of_students_viewed: {
        type: String,
    },
}, { timestamps: true });

let Summary_quiz = mongoose.model("summary_quizzes", summaryQuizSchema);

module.exports = Summary_quiz;