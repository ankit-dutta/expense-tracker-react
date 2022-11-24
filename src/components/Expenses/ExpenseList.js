import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';


const ExpenseList = (props) =>{

    if(props.items.length === 0){
      return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    if(props.items.length === 1){
        return (
            props.items.map((expense)=>(
                <>
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
                    <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
              </>

            ))
        )
    }


    


    return (
        <>
        <ul className='expense-List'>  

    {  props.items.map((expense)=> (  
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />))
    }
        </ul>
        </>
    )
}

export default ExpenseList;