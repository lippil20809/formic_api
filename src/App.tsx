import React from "react";

import { Provider } from "react-redux";
import Posts from "containers/Posts";

import store from "store";
import Products from "containers/Products";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Products/>
    <Posts/>
    </Provider>
  );
};

export default App;
