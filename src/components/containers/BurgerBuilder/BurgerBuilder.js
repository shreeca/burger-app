import React,{ Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from "../../../components/Burger/Burger";
import BuildControls from "../../../components/Burger/BuildControls/BuildControls";
import Modal from '../../../components/UI/Modal/Modal';
import OrderSummary from '../../../components/Burger/OrderSummery/OrderSummary';
//Tracking each ingredients price

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};



//Using class based component, to maintain state.
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        purchasable : false,
        //For order now. setting initial value false
        purchasing: false
    }

    //Purchase function

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el ;
            }, 0);
        this.setState({purchasable: sum > 0})
    }


    //Adding, Add and delete Control handler

    addIngredientHandler = (type) => {

        //checking on count of present ingredients and updating ingredients
       const oldCount = this.state.ingredients[type];
       const updatedCount = oldCount + 1;
       const updatedIngredients = {
           ...this.state.ingredients
       };
       updatedIngredients[type] = updatedCount;
       //Updating the price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    //Order now.(purchase method)

    purchaseHandler = ()=>{
        this.setState({purchasing: true});
    }
    //Canceling the purchase order on click
    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }

    //for button continue
    purchaseContinuedHandler = () => {
        alert('You continue!');
    }



    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return ;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //Updating the price
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {/*Added order summary dialogue box, Ingredients,
                    cancel and continue button */}
                    <OrderSummary
                        ingredients = {this.state.ingredients}
                        price = {this.state.totalPrice}
                        purchaseCanceled = {this.purchaseCancelHandler}
                        purchaseContinued = {this.purchaseContinuedHandler}
                    />

                </Modal>

                {/*//Adding Burger ingredients */}
                {/*<div>Burger</div>*/}
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientsDeleted = {this.deleteIngredientHandler}
                disabled ={disabledInfo}
                purchasable = {this.state.purchasable}
                ordered = {this.purchaseHandler}
                price = {this.state.totalPrice}/>
            </Aux>
        );
    }
};


export default BurgerBuilder;