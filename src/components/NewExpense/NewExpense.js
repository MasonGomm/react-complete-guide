import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openFormHandler = (event) => {
    setIsOpen(true);
  };

  const closeFormHandler = (event) => {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={openFormHandler}>Add New Expense</button>}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
