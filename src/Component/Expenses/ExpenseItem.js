import React, {useState} from 'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../Card/Card";

const ExpenseItem = (props) =>{
  const [amount, setAmount] = useState(props.amount)

  const amountHandler = ()=>{
    setAmount("$100")
  }
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={amount} location={props.location}/>
      </div>
      <button onClick={amountHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
