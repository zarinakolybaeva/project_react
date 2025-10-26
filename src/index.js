import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerender = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateText={store.updateText.bind(store)}
                updateMessageText={store.updateMessageText.bind(store)}
            />
        </React.StrictMode>
    );
};


rerender(store.getState());


store.subscribe(rerender);
