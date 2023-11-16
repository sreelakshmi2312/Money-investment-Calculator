import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && (
        <p classname="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
