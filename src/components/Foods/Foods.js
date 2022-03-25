import React from 'react';
import Food from '../Food/Food';
import './Foods.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Foods = () => {
const [foods, setFoods]= useState([]);
const [cart, setCart]= useState([])

console.log(cart);
const addToCart= (food)=>{
    const newFood= [...cart, food];
    // const addedFood= [...newFood, food]
    setCart(newFood);
}





// console.log(foods);
    
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=> res.json())
        .then(data=>setFoods(data.meals))
    
    
    },[]);


    return (
        <div>
            <h1>Select Your Favorite Foods</h1>
        <div className='foods-container'>
        <div className='food-container'>
        {
            foods.map(food=> <Food
                key={food.idMeal}
                food={food} addToCart={addToCart}></Food>)
        }
        
        </div>
        <div className='cart-container'>
            {/* {
                carts.map(cart=>
            } */}
            <Cart cart={cart} key={cart.id}></Cart>
        </div>
        </div>
        </div>
    );
};

export default Foods;