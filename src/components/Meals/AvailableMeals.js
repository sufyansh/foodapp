import React from 'react';
import classes from './AvalaibleMeals..module.css'
const Dummy_Meals = [
    {
        id : 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggie',
        price: 22.99,
    },
    {
         id: 'm2',
         name: 'Schnitzel',
         description: 'A german Specialty',
         price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty ',
        price: 12.99,
   }
]
const AvailableMeals =()=>   {
    const mealsList = Dummy_Meals.map(meals => <li>{meals.name}</li>);
  return (
    <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
  )
}

export default AvailableMeals;