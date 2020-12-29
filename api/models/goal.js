const { Schema, model } = require("mongoose");

const goalSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Goal = model("GoalSchema", goalSchema);

module.exports = { Goal };
