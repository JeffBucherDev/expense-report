import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  //useState that will establish if form is being edited
  const [beingEdited, setBeingEdited] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setBeingEdited(false);
  };

  // function that changes state of setBeingEdited to true
  const startEditingHandler = () => {
    setBeingEdited(true);
  };

  const stopEditingHandler = () => {
    setBeingEdited(false);
  };

  return (
    <div className="new-expense">
      {!beingEdited && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {beingEdited && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
