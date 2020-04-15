import React,{ Component } from 'react';
import Aux from '../../../hoc/Aux';
import Burger from "../../../components/Burger/Burger";

//Using class based component, to maintain state.
class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                {/*//Adding Burger ingredients */}
                {/*<div>Burger</div>*/}
                <Burger/>

                <div>Build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;