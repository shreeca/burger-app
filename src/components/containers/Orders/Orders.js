import React, {Component} from "react";
import Order from "../Order/Order";
import axios from '../../../axios-orders';
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";


//Adding class key word
class Orders extends Component {
    //Setting state (order and loading data)
    state = {
        orders: [],
        loading: true
    }

    //need to fetch my orders when from database
    componentDidMount() {
        // fetch and store it as an array
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                // for each array in data. (push an element into an array)
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    //Need to render my orders
    render() {
        console.log(this.state.orders);
        return(
            <div>
            {/* collect the orders(Loop through) and output them */}
            {/*  (the state above defined is mapped )*/}
                {this.state.orders.map(order => (
                    <Order
                        key = {order.id}
                         // order information
                        ingredients = {order.ingredients}
                        price = {+order.price}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);


