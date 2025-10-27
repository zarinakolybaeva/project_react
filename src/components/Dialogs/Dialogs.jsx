import s from './Dialogs.module.scss'
 import DialogItems from "./Dialog/Dialog";
import Message from "./Message/Message";
// import {dialogsData}  from "../../index";
// import {messagesData} from "../../index";
//
import React from "react";
import {addMessageActionCreator, updateMessageText} from "../../Redux/state";


function Dialogs(props){

    // let dialogItems=dialogsData.map((d)=> <DialogItems name={d.name} id={d.id}/>)
    // let messagesData=[
    //     {id:1,message:"Hello!"},
    //     {id:2,message:"How are you?"},
    //     {id:3,message:"I'm fine, thanks!"}
    // ]
    let state=props.store.getState().DialogsPage;
    let messageItems=state.messagesData.map((m)=><Message message={m.message}/>)

    // let dialogData=[
    //     {name:"Me",id:1},
    //     {name:"Sister",id:2},
    //     {name:"Guli",id:3},
    //     {name:"Ami",id:4}
    // ]

    let dialogItems=state.dialogsData.map((d)=><DialogItems name={d.name} id={d.id}/>)
    // let messtext=React.createRef();
    let newWord=state.newWord;

    let addMessage=()=>{

         // let text=messtext.current.value;
         // props.addMessage(text);
        props.store.dispatch(addMessageActionCreator());

     }
     let onPostChange=(event)=>{
         // let text=messtext.current.value;
         // props.updateMessageText(text);
         let text=event.target.value;
         props.store.dispatch( updateMessageText(text));
     }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsContent}>
                {/*<DialogItems name={dialogData[0].name} id={dialogData[0].id}/>*/}
                {/*<DialogItems name={dialogData[1].name} id={dialogData[1].id}/>*/}
                {dialogItems}

            </div>
            <div className={s.messages}>
                {messageItems}
                <textarea onChange={onPostChange}  placeholder="enter your message" value={newWord}/>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;
