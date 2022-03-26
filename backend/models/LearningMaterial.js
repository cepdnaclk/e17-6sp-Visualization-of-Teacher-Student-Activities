// models/LearningMaterial.js

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let newSchema = new Schema(
  {
    User_id: {
      type: String,
    },
    Material_name: {
        type: String,
    },
    Module_id: {
      type: String,
    },
    Type: {
      type: String,
    },
    Status: {
        type: String,
    },
    Date: {
        type: String,
    },
  },
  { timestamps: true }
);

let LearningMaterial = mongoose.model("learning_material", newSchema);

module.exports = LearningMaterial;