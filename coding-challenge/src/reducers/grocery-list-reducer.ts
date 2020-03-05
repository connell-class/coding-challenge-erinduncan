import { IGroceryListState } from "../utility";
import { createTypes } from "../action-mappers/grocery-list-actions";

const initialState: IGroceryListState = {
    addList: null,
    createMessage: ""
  };
  
  export const groceryListReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case createTypes.SUCCESSFUL_CREATE: {
        return {
          ...state,
          addBatch: action.payload.addBatch,
          createMessage: "New List Added"
        };
      }
      case createTypes.UNSUCCESSFUL_CREATE: {
        return {
          ...state,
          createMessage: action.payload.createMessage
        };
      }
  
      default:
        return state;
    }
  };