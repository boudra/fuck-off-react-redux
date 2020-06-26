import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./App.css";

import reducer from "./reducer";
import NameForm from "./NameForm";
import Header from "./Header";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("before", store.getState());
  console.log("action", action);
  next(action);
  console.log("after", store.getState());
};

const promiseMiddleware = (store) => (next) => (action) => {
  if(action.constructor === Promise) {
    action.then(newAction => next(newAction));
  } else {
    next(action);
  }
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <NameForm></NameForm>
      </div>
    </Provider>
  );
}

export default App;
