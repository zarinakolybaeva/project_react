import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {addPost, updateText} from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
// addPost('df');
export let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <App  state={state}  addPost={addPost} updateText={updateText}/>
        </React.StrictMode>
    );

};
