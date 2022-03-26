// models/Viewed_LearningMaterial.js

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let newSchema = new Schema(
  {
    Type: {
      type: String,
    },
    Views: {
        type: Number,
    },
  },
  { timestamps: true }
);

let Viewed_LM = mongoose.model("viewed_learning_material", newSchema);

module.exports = Viewed_LM;