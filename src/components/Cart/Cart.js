import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Selected Items</h1>
            <div>
                Name: {
                cart.map(item=><h3>{item.strMeal}</h3>)
            }
            </div>
        </div>
    );
};

export default Cart;