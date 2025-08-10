
import  s from './MyPosts.module.scss'
import Post from './post/Post';
function MyPosts(){
    return (

         <div >
            my posts
            <div>
            <textarea/>
            <button>add post</button>
            </div>
          <Post message='hello' like='15'/>
          <Post like='20'/>
         </div>
     


    )
}
export default MyPosts;