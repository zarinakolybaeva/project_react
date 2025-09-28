import s from './Dialogs.module.scss'
 import DialogItems from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {dialogsData}  from "../../index";
// import {messagesData} from "../../index";
//

function Dialogs(props){

    // let dialogItems=dialogsData.map((d)=> <DialogItems name={d.name} id={d.id}/>)
    // let messagesData=[
    //     {id:1,message:"Hello!"},
    //     {id:2,message:"How are you?"},
    //     {id:3,message:"I'm fine, thanks!"}
    // ]
    let messageItems=props.messagesData.map((m)=><Message message={m.message}/>)

    // let dialogData=[
    //     {name:"Me",id:1},
    //     {name:"Sister",id:2},
    //     {name:"Guli",id:3},
    //     {name:"Ami",id:4}
    // ]
    let dialogItems=props.dialogsData.map((d)=><DialogItems name={d.name} id={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsContent}>
                {/*<DialogItems name={dialogData[0].name} id={dialogData[0].id}/>*/}
                {/*<DialogItems name={dialogData[1].name} id={dialogData[1].id}/>*/}
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs;
