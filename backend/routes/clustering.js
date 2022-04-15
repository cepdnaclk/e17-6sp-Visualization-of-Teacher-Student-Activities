// routes/clustering.js

const mongoose = require("mongoose");
const express = require("express");
const Cluster = require("../models/userClusters");
const router = express.Router();

// Add objects to DB(test)
router.post("/", async (req, res) => {
    try {
        let post = new Cluster(req.body);
        post = await post.save();
        res.status(200).json({
            status: 200,
            data: post,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

// Get list of objects in DB
router.get("/list", async (req, res) => {
   try {
        let materials = await Cluster.find();
        res.status(200).json({
            status: 200,
            data: materials,
        });
    } catch (err) {
         res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});



module.exports = router;