import * as actionTypes from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "selected_items"],
};
const initialState = {
  cart: 0,
  // price: `${Math.floor(Math.random() * (10 + 1)) * 100}`,
  price: 0,
  user: "",
  Dogs: [],
  selected_items: [],
};

// const reducer = (state = initialState, action) => {
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_DOG:
      return {
        ...state,
        selected_items: state.selected_items.filter(
          (item) => item.key !== action.itemKey
        ),
      };
    case actionTypes.UPDATE_CART:
      return {
        ...state,
        cart: state.selected_items.length,
      };
    case actionTypes.LOAD_DOGS:
      return {
        ...state,
        Dogs: state.Dogs.concat(action.Dogs),
        price: `${Math.floor(Math.random() * (10 + 1)) + 1 * 100}`,
      };
    case actionTypes.ON_SELECT: {
      const newSelectedItem = {
        id: action.itemData.id,
        img: action.itemData.img,
        key: action.itemData.key,
      };
      return {
        ...state,
        ...action.payload,
        selected_items: state.selected_items.concat(newSelectedItem),
      };
    }
    case actionTypes.SET_USER:
      return {
        ...state,
        user: (state.user = action.user),
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: (state.user = ""),
        cart: (state.cart = 0),
        Dogs: (state.Dogs = []),
        price: (state.price = 0),
        selected_items: (state.selected_items = []),
      };
    default: {
      return state;
    }
  }
};
export default persistReducer(persistConfig, rootReducer);
//export default reducer;
