//Adding toolbar
import React from 'react';
import Logo from "../../Layout/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from './Toolbar.css'


const Toolbar = (props) => (

    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleCliked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated = {props.isAuth}/>
        </nav>
    </header>
);

export default Toolbar;