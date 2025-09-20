import s from './SideBar.module.scss'
import {NavLink} from "react-router-dom";

function SideBar(){
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
         
         
        </nav>
    )
}
export default SideBar;