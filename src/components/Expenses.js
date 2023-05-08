import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
return(<div>
      
      <ExpenseItem className="expenses"
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        expenseDate={props.items[0].expenseDate} 
      />
      <ExpenseItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        expenseDate={props.items[1].expenseDate} 
      />
      <ExpenseItem 
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        expenseDate={props.items[2].expenseDate} 
      />
      <ExpenseItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        expenseDate={props.items[3].expenseDate} 
      />
      </div>
      );
    }
export default  Expenses