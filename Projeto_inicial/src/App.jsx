import ExpenseItem from "./Components/ExpenseItem/ExpenseItem.jsx";
import { expenses } from "./Components/ExpenseItem/Expenses.js";
 
function App() {
  return (
    <div>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.amount}
          />
        );
      })}
    </div>
  );
}
 
export default App;