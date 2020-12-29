const { editGoal } = require("../repository/index");

exports.editGoalHandler = async (ctx, next) => {
  const {
    params: { id },
  } = ctx;
  const {
    request: {
      body: { title, content },
    },
  } = ctx;
  await editGoal(id, title, content);
  ctx.body = { message: "Success!" };
  ctx.status = 200;
  return next();
};
