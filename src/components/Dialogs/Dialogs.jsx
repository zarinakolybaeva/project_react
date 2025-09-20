import s from './Dialogs.module.scss'

// import DialogItems from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {dialogsData} from "../../index";

function Dialogs(){

    // let dialogItems=dialogsData.map((d)=> <DialogItems name={d.name} id={d.id}/>)
    let messagesData=[
        {id:1,message:"Hello!"},
        {id:2,message:"How are you?"},
        {id:3,message:"I'm fine, thanks!"}
    ]
    let messageItems=messagesData.map((m)=><Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsContent}>
                {/*{dialogItems}*/}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs;
