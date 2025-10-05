import s from './SideBar.module.scss'
import {NavLink} from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import Friends from "../Friends/Friends";

function SideBar(props){
    let FriendsElements =props.state.SideBar.map((d)=><Friends name={d.name} id={d.id}/>)

    return (
        <nav className={s.SideBar}>
         
            <div className={s.item}>
                <NavLink to="/profile"  className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}` }>  Profile</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/dialogs"  className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}>Messages </NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/news" className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}` }>News </NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/music"  className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}` }> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends"  className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}` }> Friends</NavLink>
                {FriendsElements}
            </div>

        </nav>
    )
}
export default SideBar;