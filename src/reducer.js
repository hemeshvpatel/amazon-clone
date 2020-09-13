//Reducer is where data layer logic goes

export const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // Logic for adding item to cart
      break;
    case "REMOVE_FROM_CART":
      // Logic for removing item from cart
      break;
    default:
      return state;
  }
}
