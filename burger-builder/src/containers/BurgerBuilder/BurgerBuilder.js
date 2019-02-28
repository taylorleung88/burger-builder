import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 1,
    meat: 1.5,
    bacon: 1.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
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
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabled}
                    totalPrice = {this.state.totalPrice}
                    />
            </div>
        );
    }
}

export default BurgerBuilder;