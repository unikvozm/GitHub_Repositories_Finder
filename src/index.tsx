import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import { rootReducer } from "./redux/reducers/rootReducer";
import rootSaga from "./redux/sagas/rootSaga";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

saga.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
