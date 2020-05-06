import * as actionTypes from './actions';

//Initialising state
const initialState = {
    ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
    },
    totalPrice: 4
};
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};
//Reducing the state property
const reducer = (state = initialState, action) =>{
switch (action.type){
    case actionTypes.ADD_INGREDIENTS: // Adding ingredients through redux, than coding dynamically
        return{
            ...state, //distributing the old state
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]:state.ingredients[action.ingredientName]+1 //here it takes old ingredients and add new ingredients
                                                                                    // when where the adding action take place
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        };
    case actionTypes.REMOVE_INGREDIENTS:
        return{
            ...state, //distributing the old state
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1 //here it takes old ingredients and remove added ingredients
                // when where the adding action take place
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
         };
    default:
        return state;
}
};

export default reducer;