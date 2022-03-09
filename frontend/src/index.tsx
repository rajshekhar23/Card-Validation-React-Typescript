import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import balanceReducer from "./reducers/balanceReducer";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(balanceReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App}></Route>
      </Router>
    </React.Fragment>
    </Provider>,
  document.getElementById('root'),
);
