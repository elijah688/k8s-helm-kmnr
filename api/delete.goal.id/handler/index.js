const Router = require("@koa/router");
const deleteGoalRouter = new Router();
const { deleteGoalHandler } = require("./delete");

deleteGoalRouter.delete("/goals/:id", deleteGoalHandler);

module.exports = {
  deleteGoalRouter,
};
