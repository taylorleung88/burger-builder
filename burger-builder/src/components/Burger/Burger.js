import React from 'react';
import Ingredients from './Ingredients/Ingredients';

import classes from './Burger.module.css';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(inKey => {
            return [...Array(props.ingredients[inKey])]
            .map((_, i) => {
                return <Ingredients key={inKey + 1} type={inKey} />;
            });
        });
    return(
        <div className={classes.Burger}>
            <Ingredients type="bread-top" />            
            {transformedIngredients}
            <Ingredients type="bread-bottom" />
        </div>
    );
};

export default Burger;