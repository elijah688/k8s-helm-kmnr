const { app } = require("./app");
const {
  env: { API_PORT },
} = process;
const port = API_PORT || 5000;
console.log(`Server started on port ${port}...`);
app.listen(port);
