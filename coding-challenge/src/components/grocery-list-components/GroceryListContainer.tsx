import { connect } from "react-redux";
import { GroceryListComponent } from "./GroceryListComponent";
import { IState } from "../../utility";
import { createList } from "../../action-mappers/grocery-list-actions"

const mapStateToProps = (state: IState) => {
    return {
      createMessage: state.groceryListState.createMessage
    };
  };

  const mapDispatchToProps = {
    createList
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(GroceryListComponent);
