import image from "../../assets/images/MainBefore.jpg"
import  s from './Content.module.scss'
import MyPosts from "./Posts/MyPosts";
function Content(){
    return (
        <div className={s.Content}>
         <img src={image} width="800" height="150"></img>
         <div>
            ava +descr
         </div>
        <MyPosts/>
        </div>


    )
}
export default Content;