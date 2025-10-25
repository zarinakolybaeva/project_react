import s from './MyPosts.module.scss'
import Post from './post/Post';
import React from "react";

function MyPosts(props) {
    // eslint-disable-next-line no-undef

    let newPost=React.createRef();
    let addPost=()=>{
        // let text=document.getElementById('message').value;
        debugger;
        let text=newPost.current.value;
        props.addPost(text);

    }

    let onPostChange=()=>{
        let text=newPost.current.value;
        props.updateText(text);
    }

    let postItems=props.postsMap.map((post)=> <Post message={post.message} like={post.like}/>)
    return (
        <div className={s.myPosts}>
            <h3>my posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPost} id="message" value={props.newText}/>=
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            {postItems}

        </div>

    )
}

export default MyPosts;