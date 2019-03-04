import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 1,
    meat: 1.5,
    bacon: 1.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        canOrder: false,
        purchase: false
    }

    updateOrderState(ingredients) {

        //adds number of ingredients, if ingredients are added then
        //enable the order button in BuildControls
        const sum = Object.keys(ingredients)
            .map(inKey => {
               return ingredients[inKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({ canOrder: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const addPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        this.setState({ 
            totalPrice: newPrice,
            ingredients: updatedIngredients 
        });
        this.updateOrderState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return; //will not allow removal if no ingredients
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const subPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - subPrice;
        this.setState({ 
            totalPrice: newPrice,
            ingredients: updatedIngredients 
        });
        this.updateOrderState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchase: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchase: false });
    }

    render() {
        const disabled = {
            ...this.state.ingredients
        };
        for(let key in disabled) {
            disabled[key] = disabled[key] <= 0
        }
        //{ lettuce: true, meat: false ...}

        return(
            <div>
                
                <Modal show={this.state.purchase} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabled}
                    canOrder={this.state.canOrder}
                    totalPrice = {this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    />
            </div>
        );
    }
}

export default BurgerBuilder;