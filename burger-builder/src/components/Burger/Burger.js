import React from 'react';
import Ingredients from './Ingredients/Ingredients';

import classes from './Burger.module.css';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //returns array of salad, bacon...
        .map(inKey => {
            return [...Array(props.ingredients[inKey])]
            .map((_, i) => {
                return <Ingredients key={inKey + i} type={inKey} />;
            })
        }) //transform array
            .reduce((arr, el) => {
                return arr.concat(el)
            }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Start adding ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <Ingredients type="bread-top" />            
            {transformedIngredients}
            <Ingredients type="bread-bottom" />
        </div>
    );
};

export default Burger;