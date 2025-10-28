const ADD_MESSAGE="ADD-MESSAGE";
const UPDATE_NEW_MESSAGE="UPDATE-NEW-MESSAGE";
const dialogReducer=(state,action)=> {
     switch(action.type) {
         case ADD_MESSAGE:
        let newMessage = {
            id: 4,
            message: state.newWord
        };
        state.messagesData.push(newMessage);
        state.newWord = '';
        return state;
     case UPDATE_NEW_MESSAGE :
        state.newWord = action.newWord;
        // this._updateMessageText(action.newWord);
             return state;
       default:
           return state;
    }
    return state;
}
export const addMessageActionCreator=()=>{
    return {
        type:"ADD-MESSAGE"
    }
}
export let updateMessageText=(text)=>{
    return {
        type:"UPDATE-NEW-MESSAGE",
        newWord:text
    }
}
export default dialogReducer;