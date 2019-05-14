import React from 'react';

import classes from './SideToggler.module.css';

const sideToggler = (props) => (
    <div className={classes.SideToggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideToggler;