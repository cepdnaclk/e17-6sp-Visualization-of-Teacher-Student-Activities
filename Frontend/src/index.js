import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import submissionReducer from './features/submission';
import dateReducer from './features/date.js';

const store = configureStore({
  reducer: {
    submission: submissionReducer,
    date: dateReducer,
  },
})

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
