import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Styles/global.css";

//REDUX
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers, //reducers
  {}, //Initial State
  //Midlewares
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
