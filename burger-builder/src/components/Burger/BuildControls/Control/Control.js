import React from 'react';
import classes from './Control.module.css';

const Control = (props) => (
    <div className={classes.Control}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.added} className={classes.Add}>Add</button>
        <button onClick={props.removed} disabled={props.disabled} className={classes.Remove}>Remove</button>
    </div>
);

export default Control;