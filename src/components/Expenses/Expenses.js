import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // Set up the useState for the year filter
  const [enteredYear, setEnteredYear] = useState("2022");
  //function used to update useState for year filter
  const filterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  //Function that checks and converts the selected year to a string and displays filtered results
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          currentSelection={enteredYear}
          onChangeYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
