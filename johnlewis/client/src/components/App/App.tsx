import * as React from "react";

import { Provider } from "react-redux";

import { store } from '../../redux/store'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductGrid from "../../pages/ProductGrid/ProductGrid";
import ProductPage from "../../pages/ProductPage/ProductPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
              <Route path="/productGrid" exact component={ProductGrid} />
              <Route path="/productPage/:id" component={ProductPage} />
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;