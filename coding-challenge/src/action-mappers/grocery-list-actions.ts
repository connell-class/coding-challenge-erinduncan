import IGroceryList from "../model/IGroceryList";
import { addList } from "../utility/api";

export const createTypes = {
    SUCCESSFUL_CREATE: "CREATE_SUCCESSFUL_LIST",
    UNSUCCESSFUL_CREATE: "CREATE_UNSUCCESSFUL_LIST"
  };
  
  export const createList = (newList: IGroceryList) => async (dispatch: any) => {
    let response: any = await addList(newList);
    if (response.body) {
      dispatch({
        type: createTypes.SUCCESSFUL_CREATE,
        payload: {
          currentList: response.body
        }
      });
    } else {
      dispatch({
        type: createTypes.UNSUCCESSFUL_CREATE,
        payload: {
          createMessage: response.createMessage
        }
      });
    }
  };
  