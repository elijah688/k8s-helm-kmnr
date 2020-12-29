const Router = require("@koa/router");
const getGoalRouter = new Router();
const { getGoalHandler } = require("./get");

getGoalRouter.get("/goals", getGoalHandler);

module.exports = {
  getGoalRouter,
};
