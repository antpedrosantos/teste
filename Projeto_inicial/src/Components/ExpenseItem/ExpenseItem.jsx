import "./ExpenseItem.css";
import "./ExpenseDate.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__day">
          {props.date.toLocaleString("en-En", { day: "2-digit" })}
        </div>
        <div className="expense-date__month">
          {props.date.toLocaleString("en-En", { month: "long" })}
        </div>
        <div className="expense-date__year">{props.date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <p className="expense-item__price ">{props.price}</p>
      </div>
    </div>
  );
}
