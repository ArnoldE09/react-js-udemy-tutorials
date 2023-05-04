
import Expenses from './components/Expenses';

function App() {
  const expenses=[
    {id:'0',title:'Car Insurance',amount:895.36,expenseDate:new Date('05/01/2023')},
    {id:'1',title:'Home Mortgage',amount:999.36,expenseDate:new Date('05/01/2023')},
    {id:'2',title:'Internet bill',amount:888.36,expenseDate:new Date('05/01/2023')},
    {id:'3',title:'Water bill',amount:777.36,expenseDate:new Date('05/01/2023')}
  ]   
  
  return (
    <div className="App">
      <Expenses items={expenses}/>
      
    </div>

  );
}

export default App;
