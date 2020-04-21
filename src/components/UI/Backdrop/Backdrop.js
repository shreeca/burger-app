//Creating a backdrop
import React from 'react';
import classes from './Backdrop.css'

const Backdrop = (props) => {
    return(
        //Backdrop shows. if  clicked (Condition)
    props.show ? <div className={classes.Backdrop}onClick={props.clicked}>

    </div>:null
    );
};

export default Backdrop;