import * as actionTypes from "./actions";

const initialState = {
  cart: 0,
  price: `${Math.floor(Math.random() * 10) * 100}`,
  user: "",
  Dogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DOG:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case actionTypes.REMOVE_DOG:
      return {
        ...state,
        cart: state.cart - 1,
      };
    case actionTypes.LOAD_DOGS:
      return {
        ...state,
        Dogs: state.Dogs.concat(action.Dogs),
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: state.user.concat(action.user),
      };
  }
  return state;
};
export default reducer;
