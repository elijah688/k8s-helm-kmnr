import React, { lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import GoalsContextProvider from "./context/index";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
const Router = lazy(() => import("./router/index"));

ReactDOM.render(
  <Suspense
    fallback={
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    }
  >
    <GoalsContextProvider>
      <React.StrictMode>
        <Router></Router>
      </React.StrictMode>
    </GoalsContextProvider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
