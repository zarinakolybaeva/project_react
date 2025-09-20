import ProfileInfo from "./ProfileInfo/ProfileInfo";
import  s from './Content.module.scss'
import MyPosts from "./Posts/MyPosts";
export const postsData=[
    {id:1,message:"Hello!",like:10},
    {id:2,message:"How are you?",like:15},
    {id:3,message:"I'm fine, thanks!",like:20}
]
function Content(){

    return (
        <div className={s.Content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>


    )
}
export default Content;