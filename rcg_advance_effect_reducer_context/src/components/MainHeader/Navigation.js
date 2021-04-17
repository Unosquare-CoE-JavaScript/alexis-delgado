import React, { useContext } from "react";
import AuthContext from "../../store/auth_context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  // consuming context with useContext hook
  const ctx = useContext(AuthContext);

  return (
    // Using context with a consumer
    // <AuthContext.Consumer>
    //   {(ctx) => {
    // return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
