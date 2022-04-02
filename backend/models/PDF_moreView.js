// models/PDF_moreView.js

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let newSchema = new Schema(
  {
    Material_name: {
        type: String,
    },
    Count: {
        type: Number,
    },
  },
  { timestamps: true }
);

let PDF_moreView = mongoose.model("pdf_more_view", newSchema);

module.exports = PDF_moreView;