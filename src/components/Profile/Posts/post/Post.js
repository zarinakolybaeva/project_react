import  s from './Post.module.scss'
function Post(props){
    return (
         <div >
               <div className={s.item}>
               <img src='https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg'></img>
                {props.message}
                <div>
                    <span>like {props.like}</span>
                </div>
               </div>
         </div>
            
       
     


    )
}
export default Post;