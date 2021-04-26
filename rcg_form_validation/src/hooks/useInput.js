import { useState, useReducer } from "react";

const inputInitialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
};

const useInput = (validateValue) => {
  const [valueState, dispatch] = useReducer(inputReducer, inputInitialState);

  const valueIsValid = validateValue(valueState.value);
  const hasError = !valueIsValid && valueState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: valueState.value,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
