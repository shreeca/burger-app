//Adding Side drawer

import React from 'react';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {
    // Animation to slide in and out.
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux >
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.SideDrawer}>
                {/*Adding logo on side drawer*/}
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav >
                    <NavigationItems isAuthenticated = {props.isAuth}/>
                </nav>
            </div>
            </div>

        </Aux>
    );
};

export default SideDrawer;