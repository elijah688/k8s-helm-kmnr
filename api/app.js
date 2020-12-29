const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const { getGoalRouter } = require("./get.goals/handler/index");
const { postGoalRouter } = require("./post.goal/handler/index");
const { editGoalRouter } = require("./put.goal.id/handler/index");
const { deleteGoalRouter } = require("./delete.goal.id/handler/index");
const cors = require("@koa/cors");
const mongoose = require("mongoose");

const {
  env: { MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME },
} = process;

const connectionUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.bs8aa.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("error", (error) => {
  throw error;
});

app.use(bodyParser());
app.use(cors());
// app.use(postDataRouter.routes());
// app.use(postDataRouter.allowedMethods());
app.use(postGoalRouter.routes());
app.use(postGoalRouter.allowedMethods());
app.use(getGoalRouter.routes());
app.use(getGoalRouter.allowedMethods());
app.use(editGoalRouter.routes());
app.use(editGoalRouter.allowedMethods());
app.use(deleteGoalRouter.routes());
app.use(deleteGoalRouter.allowedMethods());

module.exports = {
  app,
};
