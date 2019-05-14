import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    //can be functional component
    componentWillUpdate = () => {
        console.log('Order summary will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(inKey => {
                return (
                <li key={inKey}>
                    <span style={{textTransform: 'capitalize'}}>{inKey}</span>: {this.props.ingredients[inKey]}
                </li>);
            });
        return(
            <div>
                <h3>Your Order</h3>
                <p>Your burger has the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Success" clicked={this.props.continuePurchase}>Continue</Button>
                <Button btnType="Danger" clicked={this.props.cancelPurchase}>Cancel</Button>
            </div>
        );
    }

}

export default orderSummary;