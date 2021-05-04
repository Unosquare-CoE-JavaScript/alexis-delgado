import React from "react";
import classes from "./Cockpit.css";
import styled from "styled-components";

const Cockpit = (props) => {
  const Button = styled.button`
    background-color: ${(props) => (props.alt ? "red" : "green")};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    }
  `;

  const assignedClasses = [];
  let btnClass = "";

  if (props.shownPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }

  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really work!</p>
      <Button
        className={btnClass}
        alt={props.shownPersons}
        onClick={props.clicked}
      >
        Toggle Persons
      </Button>
    </div>
  );
};

export default Cockpit;
