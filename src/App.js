import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";
import Modal from "./components/UI/Modal/Modal";
import Checkout from "./components/containers/Checkout/Checkout";
import Orders from "./components/containers/Orders/Orders";
import Auth from "./components/containers/Auth/Auth";


class App extends Component {
    render() {
        return (
            <div>
                {/*// Wrapping with layout file*/}
                <Layout>
                    <Switch>
                    {/*Routing*/}
                    <Route path = "/checkout" component = {Checkout} />
                    <Route path = "/orders" component = {Orders}/>
                    <Route path = "/auth" component = {Auth}/>
                    <Route path = "/" exact component = {BurgerBuilder} />
                    </Switch>
                </Layout>
                <Modal>
                    <div
                        style={{color:'black'}}>

                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;
