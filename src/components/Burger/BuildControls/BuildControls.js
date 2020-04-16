//Adding Build controls.(Users can control the ingredients of the burger
import React from 'react';
import classes from './BuildControls.css';
//Adding BuildControl file(label and buttons)
import BuildControl from "./BuildControl/BuildControl";


const controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacon', type: 'bacon'},
    {label : 'Cheese', type: 'cheese'},
    {label : 'Meat', type: 'meat'},
]

const BuildControls = (props) => (

    //Outter layer of buildcontrol

    <div className={classes.BuildControls}>
        {/*// wrapping build control*/}
        {controls.map(ctrl => (
            <BuildControl key ={ctrl.label} label = {ctrl.label} />
        ))}
    </div>

    );

export default BuildControls