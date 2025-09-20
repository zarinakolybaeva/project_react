import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
export const dialogsData=[
    {name:"Me",id:1},
    {name:"Sister",id:2},
    {name:"Guli",id:3},
    {name:"Ami",id:4},
    {name:"Aili",id:5}
]
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

