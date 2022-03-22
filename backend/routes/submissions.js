const express = require("express");
const submitted_submission = require("../models/submitted_submission");
const summary_submission = require("../models/summary_submission");
const router = express.Router();

// temporary
router.get("/", async (req, res) => {
    try {
        let submitted_submissions = await submitted_submission.find();
        res.status(200).json({
            status: 200,
            data: submitted_submissions,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

// temporary
router.get("/summary", async (req, res) => {
    try {
        let summary_submissions = await summary_submission.find();
        res.status(200).send({ data: summary_submissions });
    } catch (err) {
        res.status(400).send({ error: err })
    }
});

// get plot data for a certain submission
router.get("/summary/plot", async (req, res) => {

    let subName = req.query.subName;
    try {
        let plotData = await summary_submission.find({ Submission_name: subName });
        res.status(200).send({ data: plotData });
    } catch (err) {
        res.status(400).send({ error: err })
    }
});


module.exports = router;