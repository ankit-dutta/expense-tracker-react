import React ,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () =>{

    const titleChange = (event) =>{
        console.log(event.target.value)
    }


  return (
    <>
      <form>

         <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type= 'text' onChange = {titleChange}></input>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type= 'number' onChange = {titleChange}></input>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type= 'date' min="2019-01-01" max="2022-12-31" onChange = {titleChange}></input>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

         </div>
        </form>
    
    </>
  )
}

export default ExpenseForm; 