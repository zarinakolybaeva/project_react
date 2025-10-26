// import {rerender} from "../index";
// let rerender = () => {
//     console.log('state');
// }
export const store={
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
        newWord: "its"
    },
    SidePage: {
        SideBar: [
            {name: "Guli", id: 3},
            {name: "Ami", id: 4},
            {name: "Aili", id: 5}
        ],
    },
},
    _callSubscriber () {
        console.log('state');
    },
    getState(){
    return this._state;
},

    addPost(){

        let newPost={id: 4, message: this._state.ProfilePage.newText, like: 10};
        this._state.ProfilePage.postsMap.push(newPost);
        this._state.ProfilePage.newText='';
        this. _callSubscriber(this._state);
    },

    addMessage(){
        let newMessage={id: 4, message: this._state.DialogsPage.newWord};
        this._state.DialogsPage.messagesData.push(newMessage);
        this._state.DialogsPage.newWord='';
        this. _callSubscriber(this._state);
    },
    updateText(newText){
        this._state.ProfilePage.newText=newText;
        this. _callSubscriber(this._state);
    },
   updateMessageText(newWord){
        this._state.DialogsPage.newWord=newWord;
        this. _callSubscriber(this._state);
    },
    subscribe(observer){
        this. _callSubscriber=observer;
    }
};

export default store;