import React,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
// const [title,setTitle] = useState(props.title);
// const [amount,setAmount]  = useState(props.amount)

// const clickHandler = () =>{
//   setTitle('updated');
//   console.log(title);
// }

// const amountChange = () =>{
//   console.log("amount chaged")
//   let newAmount = '100'
//   setAmount(newAmount);
// }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>change title</button>
      <button onClick = {amountChange}>change amount</button> */}
    </Card>
  );
}

export default ExpenseItem;
