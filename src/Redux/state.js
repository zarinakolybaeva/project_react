// import {rerender} from "../index";
// let rerender = () => {
//     console.log('state');
// }
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";

import sideBar from "../components/SideBar/SideBar";

// const ADD_MESSAGE="ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE="UPDATE-NEW-MESSAGE";
export const store= {
    _state: {
        ProfilePage: {
            postsMap: [
                {id: 1, message: "Hello!", like: 10},
                {id: 2, message: "How are you?", like: 15},
                {id: 3, message: "I'm fine, thanks!", like: 20}
            ],
            newText: "it"
        },
        DialogsPage: {
            dialogsData: [
                {name: "Me", id: 1},
                {name: "Sister", id: 2},
                {name: "Guli", id: 3},
                {name: "Ami", id: 4},
                {name: "Aili", id: 5}
            ],
            messagesData: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I'm fine, thanks!"}
            ],
            newWord: ""
        },
        SidePage: {
            SideBar: [
                {name: "Guli", id: 3},
                {name: "Ami", id: 4},
                {name: "Aili", id: 5}
            ],
        },
    },
    _callSubscriber() {
        console.log('state');
    },
    getState() {
        return this._state;
    },

    // addPost(){
    //
    //     let newPost={id: 4, message: this._state.ProfilePage.newText, like: 10};
    //     this._state.ProfilePage.postsMap.push(newPost);
    //     this._state.ProfilePage.newText='';
    //     this. _callSubscriber(this._state);
    // },

    // _addMessage(){
    //     let newMessage={id: 4, message: this._state.DialogsPage.newWord};
    //     this._state.DialogsPage.messagesData.push(newMessage);
    //     this._state.DialogsPage.newWord='';
    //     this. _callSubscriber(this._state);
    // },
    // updateText(newText){
    //     this._state.ProfilePage.newText=newText;
    //     this. _callSubscriber(this._state);
    // },
    // _updateMessageText(newWord){
    //     this._state.DialogsPage.newWord=newWord;
    //     this. _callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.ProfilePage=profileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage=dialogReducer(this._state.DialogsPage,action);

        this._callSubscriber(this._state);
        // if (action.type === 'ADD-POST') {
        //     let newPost = {id: 4, message: this._state.ProfilePage.newText, like: 10};
        //     this._state.ProfilePage.postsMap.push(newPost);
        //     this._state.ProfilePage.newText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === ADD_MESSAGE) {
            // let newMessage = {id: 4, message: this._state.DialogsPage.newWord};
            // this._state.DialogsPage.messagesData.push(newMessage);
            // this._state.DialogsPage.newWord = '';
            // this._callSubscriber(this._state);
            // this._addMessage();
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.ProfilePage.newText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE) {
        //     // this._state.DialogsPage.newWord = action.newWord;
        //     // this._callSubscriber(this._state);
        //     this._updateMessageText(action.newWord);
        // }
    }
};



export default store;