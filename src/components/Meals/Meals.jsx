import React from "react";
import { useNavigate } from "react-router";

const Meals = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={meal.strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{meal.strMeal}</h2>
          <p>{meal.strTags}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/home/${meal.idMeal}`)}
              className="btn btn-primary"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
