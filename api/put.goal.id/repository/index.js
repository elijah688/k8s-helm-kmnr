const { Goal } = require("../../models/goal");
exports.editGoal = async (id, title, content) => {
  await Goal.findByIdAndUpdate(id, { title, content });
};
