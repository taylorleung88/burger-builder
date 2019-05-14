import React from 'react';

import classes from './SideNav.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Background from '../../UI/Background/Background';
import Logo from '../../Logo/Logo';

const sideNav = (props) => {
    let attachedClasses = [classes.SideNav, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideNav, classes.Open];
    }
    //do some work before returning JSX
    return(
        <div>
            <Background show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav> 
            </div>
        </div>
    )
};

export default sideNav;