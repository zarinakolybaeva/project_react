import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
    {id: 1, message: "Hello!", like: 10},
    {id: 2, message: "How are you?", like: 15},
    {id: 3, message: "I'm fine, thanks!", like: 20}
];
let dialogsData=[
    {name:"Me",id:1},
    {name:"Sister",id:2},
    {name:"Guli",id:3},
    {name:"Ami",id:4},
    {name:"Aili",id:5}
]
let messagesData=[
    {id:1,message:"Hello!"},
    {id:2,message:"How are you?"},
    {id:3,message:"I'm fine, thanks!"}
]
root.render(
  <React.StrictMode>
    <App  postsMap={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

