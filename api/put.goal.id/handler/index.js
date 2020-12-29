const Router = require("@koa/router");
const editGoalRouter = new Router();
const { editGoalHandler } = require("./put");

editGoalRouter.put("/goals/:id", editGoalHandler);

module.exports = {
  editGoalRouter,
};
