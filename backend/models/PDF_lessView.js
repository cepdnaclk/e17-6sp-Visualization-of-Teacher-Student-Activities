// models/PDF_lessView.js

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

let PDF_lessView = mongoose.model("pdf_less_view", newSchema);

module.exports = PDF_lessView;