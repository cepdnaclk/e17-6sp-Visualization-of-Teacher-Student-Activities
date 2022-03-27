import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import submissionReducer from './features/submission'

const store = configureStore({
  reducer: {
    submission: submissionReducer,

  },
})

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
