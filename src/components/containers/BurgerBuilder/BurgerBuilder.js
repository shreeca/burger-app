import React,{ Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from "../../../components/Burger/Burger";
import BuildControls from "../../../components/Burger/BuildControls/BuildControls";

//Using class based component, to maintain state.
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                {/*//Adding Burger ingredients */}
                {/*<div>Burger</div>*/}
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls/>
            </Aux>
        );
    }
};


export default BurgerBuilder;