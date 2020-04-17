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
        {/*Price Control*/}
        <p> Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {/*// wrapping build control*/}
        {controls.map(ctrl => (
            <BuildControl
                key ={ctrl.label}
                label = {ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                deleted = {() => props.ingredientsDeleted(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
            />
        ))}
        {/*Adding purchase button*/}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>

    );

export default BuildControls