import React from "react";
import {
  BrowserRouter as ReactRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { routes } from "./routes";

const routesComponents = routes.map(({ path, component }, i) => (
  <Route exact key={i} path={path}>
    {component}
  </Route>
));
const Router = () => (
  <ReactRouter>
    <Switch>
      {routesComponents}
      <Redirect to="/"></Redirect>
    </Switch>
  </ReactRouter>
);
export default Router;
