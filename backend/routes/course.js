// routes/course.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        data: "home page of course gp106"
    });
});

router.get("/users", (req, res) => {
    res.status(200).json({
        status: 200,
        usercount: 100
    });
});


module.exports = router;