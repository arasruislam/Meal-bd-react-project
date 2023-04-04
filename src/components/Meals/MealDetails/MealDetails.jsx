import React from "react";
import { useLoaderData } from "react-router";

const MealDetails = () => {
  const mealbd = useLoaderData();
  const meals = mealbd.meals[0];
  console.log(meals);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={meals.strMealThumb}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{meals.strMeal}</h1>
            <p className="py-6">{meals.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
