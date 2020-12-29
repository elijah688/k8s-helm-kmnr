const Router = require("@koa/router");
const postDataRouter = new Router();
const { postDataHandler } = require("./post");
const { addBodyToCtxMiddleWare } = require("../../middleware/addBodyToCtx");
postDataRouter.post("/post", addBodyToCtxMiddleWare, postDataHandler);

module.exports = {
  postDataRouter,
};
