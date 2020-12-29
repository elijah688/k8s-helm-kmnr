const { Goal } = require("../../models/goal");
const postGoal = async (title, content) => {
  const newGoal = new Goal({title, content});
  await newGoal.save();
};
module.exports = { postGoal };
