import s from './SideBar.module.scss'

function SideBar(){
    return (
        <nav className={s.SideBar}>
         
            <div className={'${s.item} ${s.active}'}>
                Profile
            </div>
            <div className={s.item}>
                Messages
            </div>
            <div className={s.item}>
                News
            </div>
            <div className={s.item}>
                Music
            </div>
         
         
        </nav>
    )
}
export default SideBar;