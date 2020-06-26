import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import "./App.css";

import reducer from "./reducer";
import NameForm from "./NameForm";
import Header from "./Header";

const store = createStore(reducer, applyMiddleware(thunk, logger));

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
