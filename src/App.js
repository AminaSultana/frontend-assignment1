import React, { useState } from "react";
import Card from "./Component/UI/Card";
import ExpenseItem from "./Component/Expenses/ExpenseItem";
import "./Component/Expenses/ExpenseItem.css";
import NewExpense from "./Component/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Delhi",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Goa",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Mumbai",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Assam",
  },
];

const App = () => {
  const [expense, setExpenses] = useState(expenses);
  const addExpenseHandler = (data) => {
    console.log(data);
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {expense.map((item) => {
        return (
          <div>
            <Card>
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                location={item.location}
              ></ExpenseItem>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default App;
