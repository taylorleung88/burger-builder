import React from 'react';
import classes from './Background.module.css';

const background = (props) => (
    props.show ? <div className={classes.Background}
        onClick={props.clicked}></div> : null
);

export default background;