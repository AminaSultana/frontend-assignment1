const ExpenseForm = () => {
    const titleChangeHandler = (e)=>{
        console.log(e.target.value);
    }
  return (
    <form>
      <div>
        <label>Expense Title</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div>
        <label>Expense Amount</label>
        <input type="number" onChange={titleChangeHandler}/>
      </div>
      <div>
        <label>Date</label>
        <input type="Date" onChange={titleChangeHandler}/>
      </div>
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
