import React from 'react';
import classes from './BuildControls.module.css';
import Control from './Control/Control';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: {props.totalPrice.toFixed(2)}</p>
        {controls.map(control => (
            <Control added={() => props.ingredientAdded(control.type)} 
                removed={() => props.ingredientRemoved(control.type)} 
                key={control.label} label={control.label} 
                disabled={props.disabled[control.type]}
                />
        ))}
        <button className={classes.OrderButton}
            disabled={!props.canOrder}
            onClick={props.ordered}>ORDER NOW</button>
    </div>

);

export default BuildControls;