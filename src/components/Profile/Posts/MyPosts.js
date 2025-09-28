import s from './MyPosts.module.scss'
import Post from './post/Post';


function MyPosts(props) {

    let postItems=props.postsMap.map((post)=> <Post message={post.message} like={post.like}/>)
    return (
        <div className={s.myPosts}>
            <h3>my posts</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>add post</button>
            </div>
            {postItems}

        </div>

    )
}

export default MyPosts;