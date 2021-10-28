import { useState, useEffect } from "react";
import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameOnChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameOnChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailOnChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    nameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  useEffect(() => {
    if (nameIsValid && lastNameIsValid && emailIsValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [nameIsValid, lastNameIsValid, emailIsValid]);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameOnChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameValue}
            onChange={lastNameOnChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailOnChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
