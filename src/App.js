import './App.css';
import ExpenseList from './ExpenseList';
import Input from './Input';

function App() {
  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <Input />
    <ExpenseList />
    </div>
  );
}

export default App;
