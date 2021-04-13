import React from "react";

import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

export const AddUser = () => {
  const addUserHandler = (event) => event.preventDefault();

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input id="username" type="text" />
        <label>Age(Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
