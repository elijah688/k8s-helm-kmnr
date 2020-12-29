const { postGoal } = require("../repository/index");

exports.postGoalHandler = async (ctx, next) => {
  const {
    request: {
      body: { title, content },
    },
  } = ctx;
  await postGoal(title, content);
  ctx.body = { message: "Success!" };
  ctx.status = 200;
  return next();
};
