import React ,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const  [userInput , setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChange = (event) =>{
       // console.log(event.target.value)
        setEnteredTitle(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value};
        // })
    }

    const amountChange = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateChange = (event)=>{
        setEnteredDate(event.target.value)
    }
     
    const submitHandler = (event)=>{
       event.preventDefault();

       const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date : new Date(enteredDate)
       }

    //    console.log(expenseData);
       props.saveExpenseData(expenseData);
       setEnteredTitle('')
       setEnteredAmount('')
       setEnteredDate('')
    }


  return (
    <>
      <form onSubmit={submitHandler}>

         <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type= 'text' value={enteredTitle} onChange = {titleChange}></input>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type= 'number' value={enteredAmount} onChange = {amountChange}></input>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type= 'date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange = {dateChange}></input>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>

         </div>
        </form>
    
    </>
  )
}

export default ExpenseForm; 