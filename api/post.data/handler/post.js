const { write, handlePost } = require("../repository/index");
exports.postDataHandler = async (ctx, next) => {
  const { dataIsPresent } = ctx;
  const body = dataIsPresent
    ? await handlePost(ctx)
    : "Missing required content in request body!";
  ctx.body = body;
  ctx.status = dataIsPresent ? 200 : 422;
  return next();
};
