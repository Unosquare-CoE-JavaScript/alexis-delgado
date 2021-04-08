import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
  });

  const [otherState, setOtherState] = useState("some other value");
  const [shownPersons, setShownPersons] = useState(false);

  console.log(personsState, otherState);

  const togglePersonsHandler = () => {
    setShownPersons(!shownPersons);
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  let persons = null;

  if (shownPersons) {
    //condicional javascript way
    persons = (
      <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          changed={nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button style={style} onClick={() => togglePersonsHandler()}>
        Switch name
      </button>
      {persons}
      {/* { //Conditional render
      shownPersons ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            changed={nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
          />
        </div>
      ) : null} */}
    </div>
  );
};

export default App;
