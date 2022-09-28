import React from "react";
import Cart from "../UI/Cart";
import classes from "./AvalaibleMeals..module.css";
import MealItem from "./MealItem/MealItem";
const Dummy_Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggie",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german Specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty ",
    price: 12.99,
  },
];
const AvailableMeals = () => {
  const mealsList = Dummy_Meals.map((meals) => (
    <MealItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Cart>
        <ul>{mealsList}</ul>
      </Cart>
    </section>
  );
};

export default AvailableMeals;
