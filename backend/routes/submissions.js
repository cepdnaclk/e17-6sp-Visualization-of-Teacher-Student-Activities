const express = require("express");
const submitted_submission = require("../models/submitted_submission");
const summary_submission = require("../models/summary_submission");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let submitted_submissions = await submitted_submission.find();
        res.status(200).send({ data: submitted_submissions });
    } catch (err) {
        res.status(400).send({ error: err })
    }
});

router.get("/summary", async (req, res) => {
    try {
        let summary_submissions = await summary_submission.find();
        res.status(200).send({ data: summary_submissions });
    } catch (err) {
        res.status(400).send({ error: err })
    }
});

// get plot data for a certain submission from the database
router.get("/summary/plot", async (req, res) => {

    let subName = req.query.subName;
    try {
        let plotData = await summary_submission.find({ Submission_name: subName });
        res.status(200).send({ data: plotData });
    } catch (err) {
        res.status(400).send({ error: err })
    }
});

router.get("/users", async (req, res) => {

    let subName = req.query.subName;
    try {
        let data = await submitted_submission.find({ Submission_name: subName });
        res.status(200).send({ data: data });
    } catch (err) {
        res.status(400).send({ error: err })
    }
});



module.exports = router;
