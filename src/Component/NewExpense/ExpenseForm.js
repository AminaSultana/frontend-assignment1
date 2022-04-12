import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const numberChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredAmount(e.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
