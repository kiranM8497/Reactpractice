export const initialState = {
  basket: [],
  user:null,
};

//selector highly used in prod
 export const getBasketTotal = (basket) =>{
   return (
    //to tally up thebasket we use reduce
    basket?.reduce((amount,item) => item.price + amount,0)
   )
 } 
//is a reducer function that handles two action types, ADD_TO_BASKET and REMOVE_FROM_BASKET. When triggered, the reducer receives the current state and an action argument.
// It prints out the action argument and then checks the action type. If the action is of type
 const reducer = (state , action ) => {
  console.log(action);
  switch (action.type) {
    // it adds the item from the action argument to the basket and returns the updated state. If the action is of type
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // it tries to find the index of the item with the same id as the one in the action argument and splices it from the basket if found.
    // Otherwise, it prints out an error message. Finally, it returns the updated state.
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id:  ${action.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        }

    default:
      return state;
  } 
};

export default reducer;