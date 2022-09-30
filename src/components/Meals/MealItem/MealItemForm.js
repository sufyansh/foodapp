import React , {useRef, useState}from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid , setAmountIsValid] = useState(true);
  const submithandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumbr = +enteredAmount;
    if(enteredAmount.trim().length === 0|| enteredAmountNumbr < 1 || enteredAmountNumbr>5){
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumbr);
  };
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
      ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: " Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
