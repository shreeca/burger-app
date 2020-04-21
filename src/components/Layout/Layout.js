/** Adding Layout page (landing page)
 * */


import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// Adding Layout
class Layout extends Component {
    //Adding Side drawer action (contains if side drawer is visible or not)
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
                <Toolbar drawerToggleCliked = {this.sideDrawerToggleHandler}/>

                <SideDrawer
                open = {this.state.showSideDrawer}
                closed = {this.sideDrawerClosedHandler}/>

                <main className={classes.Content}>
                    {/*//Adding the properties from other component*/}
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

 export default Layout;
