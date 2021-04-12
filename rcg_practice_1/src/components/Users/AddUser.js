import React from "react";

export const AddUser = () => {
  const addUserHandler = (event) => event.preventDefault();

  return (
    <form onSubmit={addUserHandler}>
      <label>Username</label>
      <input id="username" type="text" />
      <label>Age(Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
