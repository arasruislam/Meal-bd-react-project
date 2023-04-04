import React from 'react';
import { useLoaderData } from 'react-router';
import Meals from '../Meals/Meals';

const Home = () => {
    const mealbd = useLoaderData();
    const meals = mealbd.meals
    // console.log(mealbd);
    return (
      <div className='w-3/4 mx-auto grid grid-cols-2 gap-4 my-8'>
        {meals.map((meal) => (
          <Meals key={meal.idMeal} meal={meal}></Meals>
        ))}
      </div>
    );
};

export default Home;