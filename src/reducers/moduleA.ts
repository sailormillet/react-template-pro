// import { ADD_TO_MODULEA } from "@constant/actionTypes";

const initialState = {
  shopping_card: [],
  list: [],
  addedList: [],
};
type actionT = {
  type: string;
  productId: never;
};
const addedList = (state = initialState.list, action: actionT) => {
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

// export const getAddedList = (state: any) => state.addedList;

const cart = (state = initialState, action: actionT) => {
  switch (action.type) {
    default:
      return {
        addedList: addedList(state.addedList, action),
      };
  }
};
export default cart;
