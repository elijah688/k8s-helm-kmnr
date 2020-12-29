const { Goal } = require("../../models/goal");
exports.deleteGoal = async (id) => {
  await Goal.findByIdAndDelete(id);
};
