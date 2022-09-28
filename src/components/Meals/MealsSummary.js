import React from 'react';
import classes from './MealsSummary.module.css';
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>delicious</h2>
        <p>
            Choose your favorite meal from our broad selection of available meals
            and enjoy a delicious lunch or dinner at home
        </p>
        <p>
            All our meals are cooked with high-quality ingredeints, just-in-time and
            of course by expereinced chefs!
        </p>
    </section>
  )
}

export default MealsSummary;