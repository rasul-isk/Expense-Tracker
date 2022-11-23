import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import './ExpenseForm.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [visibleAddExpense, setVisibility] = useState(false);
  const getVisiblility = (element) => {
    setVisibility((prevEl) => {
      if (prevEl != element) return element;
    });
    props.visiblility(visibleAddExpense);
  };

  const result = () => {
    if (visibleAddExpense) {
      return (
        <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} visibility={getVisiblility} />
        </div>
      );
    } else {
      return (
        <div className="new-expense">
          <div className="new-expense__actions center">
            <button onClick={() => setVisibility(!visibleAddExpense)} type="button">
              Add Expense
            </button>
          </div>
        </div>
      );
    }
  };

  return result();
};

export default NewExpense;
