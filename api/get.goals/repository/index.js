const { Goal } = require("../../models/goal");
exports.getGoals = async () => {
  const goalsRaw = await Goal.find();
  const goalsTransformed = goalsRaw.map(({ _id: id, title, content }) => ({
    id,
    title,
    content,
  }));
  return goalsTransformed;
};
