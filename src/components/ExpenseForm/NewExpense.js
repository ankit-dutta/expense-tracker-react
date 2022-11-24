import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{

  const [firstAddBtn , setFirstAddBtn] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        }
        props.addExpense(expenseData)
        setFirstAddBtn(false)
  }

  const openAddBtnHandler = () =>{
    setFirstAddBtn(true)
  }
   
  const closeAddBtnHandler = () =>{
    setFirstAddBtn(false)
  }
    return(
        <>
          <div className="new-expense">
           {!firstAddBtn && <button onClick={openAddBtnHandler}>Add New Expense</button>}
          {firstAddBtn && <ExpenseForm saveExpenseData ={saveExpenseDataHandler} onCancel = {closeAddBtnHandler} />}

          </div>
        </>
    )
}

export default NewExpense;