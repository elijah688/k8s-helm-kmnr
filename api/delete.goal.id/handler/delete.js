const { deleteGoal } = require("../repository/index");

exports.deleteGoalHandler = async (ctx, next) => {
  const {
    params: { id },
  } = ctx;
  console.log(id);
  await deleteGoal(id);
  ctx.body = { message: "Deleted!!" };
  ctx.status = 200;
  return next();
};
