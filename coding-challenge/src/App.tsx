import React from "react";
import { history } from "./utility/history";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router";
import { store } from "./Store";
import GroceryListComponent from "./components/grocery-list-components/GroceryListContainer";
import ListTableComponent from "./components/display-component/ListTableComponent";
import { GroceryItemComponent } from "./components/grocery-item-components/GroceryItemComponent";
import NavBarComponent from "./NavBarComponent";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
          <NavBarComponent />
            <Switch>
              <Route path="/newlist" component={GroceryListComponent} />
              <Route path="/lists" component={ListTableComponent} />
              <Route path="/newitem" component={GroceryItemComponent} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
