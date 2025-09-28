import s from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";
function  DialogItems(props){
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
export default DialogItems;

