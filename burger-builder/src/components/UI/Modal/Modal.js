import React from 'react';
import classes from './Modal.module.css';
import Background from '../Background/Background';

const modal = (props) => (
    <div>
        <Background show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </div>
);

export default modal;