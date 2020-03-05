import React from "react";
import { history } from "./utility/history";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router";
import { store } from "./Store";
import GroceryListComponent from "./components/grocery-list-components/GroceryListContainer";
import ListTableComponent from "./components/display-component/ListTableComponent";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/newlist" component={GroceryListComponent} />
              <Route path="/lists" component={ListTableComponent} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
