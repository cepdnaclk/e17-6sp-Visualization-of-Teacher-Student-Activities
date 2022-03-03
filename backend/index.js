// index.js 

// Import packages
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Port no.
const port = process.env.PORT || 3001;

// DB conection details 
const config = require("./config");
const dbUrl = config.dbUrl;

const postsRouter = require("./routes/posts");
const homeRouter = require("./routes/home");

// Get log details of the application 
app.use(logger('dev'));

var options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};  

mongoose.connect(dbUrl, options, (err) => {
    if (err) console.log(err);
});

// Cors to enable cross-origin resource sharing
app.use(cors());

// Handle HTTP POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posts", postsRouter); //(test)
app.use("/home", homeRouter);

app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;