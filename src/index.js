import React from 'react';
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import weatherReducer from './Redux/Reducers/WeatherReducer';
import allReducer from './Redux/Reducers';

const store = createStore(allReducer,applyMiddleware(thunk));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
