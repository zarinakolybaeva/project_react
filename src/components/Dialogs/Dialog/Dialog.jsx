import s from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";
function  DialogItems(props){
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}><NavLink to={path}>
            <img src='https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg'   width="50"
                 height="50" ></img>
            {props.name}
        </NavLink></div>
    )
}
export default DialogItems;

