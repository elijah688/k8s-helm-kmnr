const Router = require("@koa/router");
const postGoalRouter = new Router();
const { postGoalHandler } = require("./post");

postGoalRouter.post("/goals", postGoalHandler);

module.exports = {
  postGoalRouter,
};
