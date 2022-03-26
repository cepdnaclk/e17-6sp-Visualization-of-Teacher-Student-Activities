const express = require("express");
const systemModel = require("../models/System");
const router = express.Router();


router.get("/system", async(req, res) => {
    try {
        let systems = await systemModel.find();
        res.status(200).json({
            status: 200,
            data: systems,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }

});


module.exports = router;