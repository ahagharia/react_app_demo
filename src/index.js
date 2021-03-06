import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShoppingList from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { Button } from "semantic-ui-react";

// ReactDOM.render(
//   <React.StrictMode>
//     <ShoppingList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
