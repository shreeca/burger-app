//Adding checkout dynamically

import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import CheckoutSummary from "../Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients : null,
        price: 0
    }
// Passing the data(ingredients) through search(url feild)
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for (let param of query.entries ()){
            // ['salad' , '1']
            if (param[0] === 'price'){
                //understand here (price)...
                // Here , price are not predefined. Set to 0 instead
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }

        }
        this.setState({ingredients : ingredients, totalPrice: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <CheckoutSummary
                    ingredients = {this.state.ingredients}
                    checkoutCancelled = {this.checkoutCancelledHandler}
                    checkoutContinued = {this.checkoutContinuedHandler}
                />
                <Route
                    path = {this.props.match.path + '/contact-data'}
                     // Set up to access ingredients in order handler
                    render = {(props) => (<ContactData ingredients = {this.state.ingredients} price = {this.state.totalPrice} {...props}  />) }/>
                    {/*Here render is taking a method */}
            </div>
        );
    }
}

export default Checkout ;