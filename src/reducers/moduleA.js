// import { ADD_TO_MODULEA } from "@constant/actionTypes";

const initialState = {
  shopping_card: [],
};
const addedList = (state = initialState.list, action) => {
  switch (action.type) {
    case "ADD_TO_MODULEA":
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

export const getAddedList = (state) => state.addedList;
const cart = (state = initialState, action) => {
  switch (action.type) {
    // case CHECKOUT_REQUEST:
    //   return initialState;
    default:
      return {
        addedList: addedList(state.addedList, action),
      };
  }
};
export default cart;
