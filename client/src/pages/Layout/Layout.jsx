import React from "react";
import { Navbar } from "react-bootstrap";
import { setTheme } from "../../utils/themes";
import "./Layout.css";

const theme = `${setTheme()}-layout`;
const Layout = ({ children }) => (
  <div className={theme}>
    <Navbar
      className="k d-flex justify-content-center align-items-center"
      variant="dark"
    >
      <Navbar.Brand href="#home">Goals</Navbar.Brand>
    </Navbar>
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      {children}
    </div>
  </div>
);

export default Layout;
