import React, { Component } from 'react';

import SideNav from '../Navigation/SideNav/SideNav';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideNav: true
    }

    sideNavClosedHandler = () => {
        this.setState({
            showSideNav: false
        });
    }

    sideToggleHandler = () => {
        this.setState((previousState) => {
            return { showSideNav: !previousState.showSideNav };
        });
    }

    render() {
        return(
            <div>
                <Toolbar sideTogglerClicked = {this.sideToggleHandler} />
                <SideNav closed = {this.sideNavClosedHandler}
                     open={this.state.showSideNav} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}    

export default Layout;