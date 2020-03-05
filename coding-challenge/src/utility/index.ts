import { combineReducers } from "redux";
import { groceryListReducer } from "../reducers/grocery-list-reducer";

export interface IGroceryListState {
  addList: any;
  createMessage: string;
}

export interface IState {
  groceryListState: IGroceryListState;
}

export const state = combineReducers<IState>({
  groceryListState: groceryListReducer
});
