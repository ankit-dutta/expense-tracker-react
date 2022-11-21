import React ,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () =>{

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChange = (event) =>{
       // console.log(event.target.value)
        setEnteredTitle(event.target.value)
    }

    const amountChange = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateChange = (event)=>{
        setEnteredDate(event.target.value)
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
                <input type= 'number' onChange = {amountChange}></input>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type= 'date' min="2019-01-01" max="2022-12-31" onChange = {dateChange}></input>
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