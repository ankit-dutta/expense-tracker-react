import React, {useState} from 'react';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from './ExpensesFilter';
//  import ExpenseItem from './ExpenseItem';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) =>{
    setFilterYear(selectedYear)
  }

  const filterData = props.items.filter((data)=> {
    return data.date.getFullYear().toString() === filterYear;
})

 

 
  

  return (
    <Card className="expenses">

      <ExpenseFilter selected = {filterYear} ChangeFilter = {filterChangeHandler} />

      <ExpensesChart expenses = {filterData}/>

      <ExpenseList items = {filterData} />

        {/* {filterData.length ===0 && <p>No expenses found</p>} */}
     

      {/* { filterData.length === 0 ? (<p>No expense found.</p>) 
        : (filterData.map((expense)=> (  
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
          ))) 
      } */}

      

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
