import React from 'react';
import './Food.css'


const Food = ({food, addToCart}) => {
const {strMeal, strCategory, strMealThumb}= food;
    return (
        <div className='food-item'>
        <img src={strMealThumb} alt="" />
        <h3>Name: {strMeal}</h3>
        <h4>Category: {strCategory}</h4>
        <button onClick={()=>addToCart(food)}>Add To Cart</button>
        </div>
    );
};

export default Food;