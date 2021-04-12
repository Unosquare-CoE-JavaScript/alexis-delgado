import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const App = () => {
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
      <Persons
        persons={personsState}
        clicked={deletePersonsHandler}
        changed={changeNameHandler}
      />
    );
  }

  return (
    <div className="App">
      <Cockpit
        shownPersons={shownPersons}
        persons={personsState}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
  );
};

export default App;
