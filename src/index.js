import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {addMessage, addPost, subscribe, updateMessageText, updateText} from './Redux/state';
import state from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
// addPost('df');
addMessage('fg');
let rerender = () => {
    root.render(
        <React.StrictMode>
            <App  state={state}  addPost={addPost} updateMessageText={updateMessageText} updateText={updateText} addMessage={addMessage}/>
        </React.StrictMode>
    );

};

rerender(state);

subscribe(rerender);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



