import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/userReducer"
import sortReducer from './features/sortReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

// creating the main store using @reduxjs/toolkit

const store = configureStore({
  reducer:{
    userState: userReducer,
    sortState: sortReducer
  }

})

root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

