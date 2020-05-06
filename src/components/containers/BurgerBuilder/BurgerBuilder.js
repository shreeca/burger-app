import React,{ Component } from 'react';
//To connect redux
import {connect} from 'react-redux'

import Aux from '../../../hoc/Aux';
import Burger from "../../../components/Burger/Burger";
import BuildControls from "../../../components/Burger/BuildControls/BuildControls";
import Modal from '../../../components/UI/Modal/Modal';
import OrderSummary from '../../../components/Burger/OrderSummery/OrderSummary';
import Spinner from "../../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import axios from '../../../axios-orders';
import * as actionTypes from '../../../store/actions';

//Tracking each ingredients price


//Using class based component, to maintain state.
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        console.log(this.props);
        // axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
        //     .then( response => {
        //         this.setState( { ingredients: response.data } );
        //     } )
        //     .catch( error => {
        //         this.setState( { error: true } );
        //     } );
    }

    updatePurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0;
    }


    //Adding, Add and delete Control handler

    //moved to redux

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
        // alert('You continue!');

        this.props.history.push('/checkout');
    };



    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded !</p>:< Spinner/>

        if (this.props.ings) {
                burger = (
                    <Aux>
                        <Burger ingredients={this.props.ings}/>
                        <BuildControls
                            ingredientAdded = {this.props.onIngredientAdded}
                            ingredientsDeleted = {this.props.onIngredientRemoved}
                            disabled ={disabledInfo}
                            purchasable = {this.updatePurchaseState(this.props.ings)}
                            ordered = {this.purchaseHandler}
                            price = {this.props.price}/>
                    </Aux>
                );
                orderSummary =  <OrderSummary
                    ingredients={this.props.ings}
                    price={this.props.price}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinuedHandler} />;
            }

                if (this.state.loading) {
                    orderSummary = <Spinner/>;
                }
                return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
                {/*//Adding Burger ingredients */}
                {/*<div>Burger</div>*/}
            {/*    Moved to if section */}
            </Aux>
        );
    }
};

const mapStatetoProps = state => {
    return{
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS,ingredientName:ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENTS,ingredientName:ingName})
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(withErrorHandler(BurgerBuilder, axios));