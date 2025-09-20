import image from "../../../assets/images/MainBefore.jpg";
import s from './ProfileInfo.module.scss'

function ProfileInfo() {
    return (
        <div>
            <img src={image} width="800" height="150"></img>
            <div className={s.description}>
                ava +descr
            </div>
        </div>
    )
}

export default ProfileInfo;