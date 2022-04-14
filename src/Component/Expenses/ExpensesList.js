import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = <p>No expenses</p>;
  if (props.items.length > 0) {
    expenseContent = props.items.map((item) => {
      return (
        <div>
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        </div>
      );
    });
  }
  if (props.items.length === 1) {
    expenseContent = [
      ...expenseContent,
      <p>Only one expense. Please add more</p>,
    ];
  }

  return (
      <ul>
          {expenseContent}
      </ul>
  )
};

export default ExpenseList;
