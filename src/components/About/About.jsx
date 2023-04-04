import React from "react";
import Meal from "../../assets/mealdb.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Meal} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Learn About Us Here!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit excepturi soluta harum quo? Cupiditate sed, laboriosam soluta
              sit voluptas quaerat consequatur quia laborum eos rem, explicabo
              molestias praesentium, odio dicta fugiat dolorum? Minima dolorum
              expedita, consequatur voluptate necessitatibus, ipsam enim eos sed
              eveniet eius unde rerum nobis nam quae consequuntur, dolore
              provident a? Eum id inventore totam earum dignissimos debitis,
              officiis quam minima commodi ipsam molestias voluptatum error
              maxime ipsum voluptates repellendus deleniti magni in? Dolore,
              voluptates ea? Vitae consectetur quae nihil iste voluptas
              voluptatum at molestias sunt minus excepturi maiores, fugit, saepe
              officia aperiam. Consectetur dolorem vitae beatae.
            </p>
            <button className="btn btn-primary">
              <Link to="/">Order Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
