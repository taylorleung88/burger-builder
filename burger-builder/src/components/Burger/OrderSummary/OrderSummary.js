import React from 'react';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(inKey => {
            return (
            <li key={inKey}>
                <span style={{textTransform: 'capitalize'}}>{inKey}</span>: {props.ingredients[inKey]}
            </li>);
        });
    
    return(
        <div>
            <h3>Your Order</h3>
            <p>Your burger has the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </div>
        );

}

export default orderSummary;