import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const styles = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  const [personsState, setPersonsState] = useState([
    { id: 1, name: "Max", age: 28 },
    { id: 2, name: "Manu", age: 29 },
    { id: 3, name: "Stephanie", age: 26 },
  ]);

  const [shownPersons, setShownPersons] = useState(false);

  const togglePersonsHandler = () => {
    setShownPersons(!shownPersons);
  };

  const changeNameHandler = (event, id) => {
    const personIndex = personsState.findIndex((person) => person.id === id);

    const person = { ...personsState[personIndex] };

    person.name = event.target.value;

    const updatePersons = [...personsState];
    updatePersons[personIndex] = person;
    setPersonsState(updatePersons);
  };

  const deletePersonsHandler = (personIndex) => {
    // const persons = personsState;
    const persons = [...personsState];
    persons.splice(personIndex, 1);
    setPersonsState(persons);
  };

  let persons = null;

  if (shownPersons) {
    persons = (
      <div>
        {personsState.map((person, index) => {
          return (
            <Person
              click={() => deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => changeNameHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    styles.backgroundColor = "red";
  }

  const classes = [];
  if (personsState.length <= 2) {
    classes.push("red");
  }

  if (personsState.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really work!</p>
      <button style={styles} onClick={togglePersonsHandler}>
        Switch name
      </button>
      {persons}
    </div>
  );
};

export default App;
