const { Schema, model } = require("mongoose");

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = model("Recipe", RecipeSchema);
