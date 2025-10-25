// import {rerender} from "../index";
let rerender = () => {
    console.log('state');
}
let state={
    ProfilePage : {
        postsMap: [
            {id: 1, message: "Hello!", like: 10},
            {id: 2, message: "How are you?", like: 15},
            {id: 3, message: "I'm fine, thanks!", like: 20}
        ],
        newText:"it"
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
        ]
    },
    SidePage: {
        SideBar: [
            {name: "Guli", id: 3},
            {name: "Ami", id: 4},
            {name: "Aili", id: 5}
        ],
    },
}

export const  addPost=()=>{

    let newPost={id: 4, message: state.ProfilePage.newText, like: 10};
  state.ProfilePage.postsMap.push(newPost);
    state.ProfilePage.newText='';
  rerender(state);
}

export const addMessage=()=>{

    let newMessage={id: 4, message: state.DialogsPage.newText};
    state.DialogsPage.messagesData.push(newMessage);
    state.DialogsPage.newText='';
    rerender(state);

}
export const  updateText=(newText)=>{
    state.ProfilePage.newText=newText;
    rerender(state);
}
export const  updateMessageText=(newText)=>{
    state.DialogsPage.newText=newText;
    rerender(state);
}
export const subscribe=(observer)=>{
    rerender=observer;
}
export default state;