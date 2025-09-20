import s from '../Dialogs.module.scss'

function Message(props) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export default Message;
