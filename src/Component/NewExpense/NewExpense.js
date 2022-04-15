import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const showFormHandler = () =>{
      setShowForm(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseHandler}></ExpenseForm>)
      
  }
  let btn = <button onClick={showFormHandler}>Add expense</button>;
  const [showForm, setShowForm] = useState(btn);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(btn);
  };

  const cancelExpenseHandler = ()=>{
    setShowForm(btn);
  }
  return (
    <div className="new-expense">
      {showForm}
    </div>
  );
};

export default NewExpense;
