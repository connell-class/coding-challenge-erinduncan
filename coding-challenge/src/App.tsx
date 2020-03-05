import React from "react";
import { history } from "./utility/history";
import "./App.css";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router";
import { store } from "./Store";
import GroceryListComponent from "./components/grocery-list-components/GroceryListContainer";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/newlist" component={GroceryListComponent} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
