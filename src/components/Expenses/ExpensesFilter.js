import React from "react";

import "./ExpensesFilter.css";

/*

listen to the change event -> forward the data to hgher lvl comp -> store it in that comp in a state

first I added event listener to the select tag
then I made the yearInputHandler function

then I went to the Expenses component and made the filterChangeHandler function

then I added the onChangeYear prop that points at filterChangeHandler

then I went into my yearChangeHandler and added the prop to the event target value

then I imported react and useState into Expenses.js

then I set my useState inside my Expenses component, and called the function (setEnteredYear) with selectedYear (argument)

now to make it 2 way binding, add another prop to the expensesFilter in the expenses component tha calls on the enteredYear

then I went back into the expensesFilter component and added a value property to the select tag with a reference of {props.currentSelection}

re-watch sections 49, 56 , 58, 59, 61


*/

const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.currentSelection} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
