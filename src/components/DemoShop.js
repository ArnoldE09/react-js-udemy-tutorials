import './ExpenseItem.css';
function DemoShop(props) { 
    return (<div className="expense-item">
             <div>My Demo Shop</div>
             <div className="expense-item__description">
                <h2>{props.name} </h2>
             <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
    );
}
export default DemoShop;