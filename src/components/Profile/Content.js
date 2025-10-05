import ProfileInfo from "./ProfileInfo/ProfileInfo";
import  s from './Content.module.scss'
import MyPosts from "./Posts/MyPosts";

function Content(props){

    return (
        <div className={s.Content}>
            <ProfileInfo/>
            <MyPosts postsMap={props.state.postsMap} addPost={props.addPost} newText={props.state.newText} updateText={props.updateText}/>
        </div>


    )
}
export default Content;