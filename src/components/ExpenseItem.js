import './ExpenseItem.css';
function ExpenseItem() {
    return <div classname="Expense-item">
              <div>May 03 2023</div>
             <div className="expense-item__description">
             <h2>Car Insurance </h2>
             <div className="expense-item__price">25.5</div>
        </div>
    </div>
    
}
export default ExpenseItem;