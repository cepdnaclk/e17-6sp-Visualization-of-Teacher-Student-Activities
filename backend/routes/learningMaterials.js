// routes/learningMaterials.js

const mongoose = require("mongoose");
const express = require("express");
const LM = require("../models/LearningMaterial");
const Viewed_LM = require("../models/Viewed_LM");
//const System = require("../models/System");
const router = express.Router();

// Add objects to DB(test)
router.post("/", async (req, res) => {
    try {
        let post = new LM(req.body);
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
        let materials = await LM.find().limit(10).sort({$natural:-1});
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

// Get list of objects in DB
router.get("/views", async (req, res) => {
    try {
         let views = await Viewed_LM.find();
         res.status(200).send({ data: views });
     } catch (err) {
          res.status(400).json({
             status: 400,
             message: err.message,
         });
     }
 });
/*
// Get list of objects in DB
router.get("/user", async (req, res) => {
    //var o = mongoose.model('System',Sys)
    try {
         let user = await User.find();
         res.status(200).json({
             status: 200,
             data: user,
         });
     } catch (err) {
          res.status(400).json({
             status: 400,
             message: err.message,
         });
     }
 });

 // Get list of objects in DB
router.get("/sys", async (req, res) => {
    //var o = mongoose.model('System',Sys)
    try {
         let sys = await System.find();
         res.status(200).json({
             status: 200,
             data: sys,
         });
     } catch (err) {
          res.status(400).json({
             status: 400,
             message: err.message,
         });
     }
 });*/

module.exports = router;