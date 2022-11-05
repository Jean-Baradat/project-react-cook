import React from "react";

const Card = ({ dish }) => {
    return (
        <div className="card">
            <h3 className="title">{dish.strMeal}</h3>
            <p className="origin">Origin : {dish.strArea}</p>
            <img className="product-img" src={dish.strMealThumb} alt={dish.strMeal} />
            <p className="description">
                {dish.strInstructions.substring(0, 425)}...{" "}
                <a href="/">Lire la suite</a>
            </p>
        </div>
    );
};

export default Card;
