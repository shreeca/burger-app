import React, {Component} from "react";
import {connect} from 'react-redux';
import Order from "../Order/Order";
import axios from '../../../axios-orders';
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';



//Adding class key word
class Orders extends Component {
    //Setting state (order and loading data)
    //moved

    //need to fetch my orders when from database
    componentDidMount() {
        // fetch and store it as an array
        this.props.onFetchOrders();
    }

    //Need to render my orders
    render() {
        let orders = <Spinner />;
        if ( !this.props.loading ) {
            orders = this.props.orders.map( order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ) )
        }
        return(
            <div>
            {/* collect the orders(Loop through) and output them */}
            {/*  (the state above defined is mapped )*/}

                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch( actions.fetchOrders() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );
