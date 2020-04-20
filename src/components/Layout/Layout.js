/** Adding Layout page (landing page)
 * */


import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// Adding Layout
class Layout extends Component {
    //Adding Side drawer action
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            //To avoid wrapping up in div, adding Aux (higher order component)
            <Aux>
                {/*//Adding Nav Bar*/}
                <Toolbar/>
                <SideDrawer/>
                <main className={classes.Content}>
                    {/*//Adding the properties from other component*/}
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

 export default Layout;
