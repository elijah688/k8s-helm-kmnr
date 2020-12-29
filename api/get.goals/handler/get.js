const { getGoals } = require("../repository/index");

exports.getGoalHandler = async (ctx, next) => {
  ctx.body = await getGoals();
  ctx.status = 200;
  return next();
};
