import {NavLink} from "react-router-dom";


function Friends(props){
    let path = "/friends/" + props.id;
    return (
        <div ><NavLink to={path}>
            {props.name}
        </NavLink></div>
    )
}
export default Friends;