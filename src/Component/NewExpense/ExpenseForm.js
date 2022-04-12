import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
  };

  const numberChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
  };

  const submitForm = (e)=>{
    e.preventDefault()
    
    console.log(userInput.enteredTitle);
    console.log(userInput.enteredAmount);
    console.log(userInput.enteredDate);

  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={numberChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" onChange={dateChangeHandler} />
        </div>
        <button type="submit" onClick={submitForm}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
