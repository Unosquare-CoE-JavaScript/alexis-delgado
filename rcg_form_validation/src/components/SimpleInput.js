import React, { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enterName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enterName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlutHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const inputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const inputEmailClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enterName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="name"
          onChange={emailInputHandler}
          onBlur={emailInputBlutHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
