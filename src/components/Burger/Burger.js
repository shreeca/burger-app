import React from 'react';
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from './Burger.css';

const Burger = (props) => {

    //sate
  // Converting array to a string
    let transformedIngredients = Object.keys (props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i)=>{
               return <BurgerIngredients key={igKey + i} type = {igKey}/>;
            });
        })

    // Reducing all the added array to an empty array
    .reduce((arr, el)=>{
        return arr.concat(el)
    },[]);

    //check the code ok
    if (transformedIngredients.length === 0){
         transformedIngredients = <p>Please add the ingredients</p>
    }
        console.log(transformedIngredients);

    //Adding burger
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default Burger;