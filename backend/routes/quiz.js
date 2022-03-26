const express = require("express");
const summary_quizes = require("../models/summary_quiz");
const router = express.Router();

router.get("/summary", async(req, res) => {
    try {
        let summary_quiz = await summary_quizes.find();
        res.status(200).json({
            status: 200,
            data: summary_quiz,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});


module.exports = router;