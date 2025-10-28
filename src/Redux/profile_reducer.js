const profileReducer = (state,action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 4, message: state.newText, like: 10};
            state.postsMap.push(newPost);
            state.newText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.ProfilePage.newText = action.newText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator=()=>({type:"ADD-POST"})

export let updateNewPost=(text)=>({type: "UPDATE-NEW-POST", newText: text})

export default profileReducer;