import React, {useEffect, useRef, useState} from "react";
import firebase from "../../firebase";
import {connect} from "react-redux";
import {updateMessages} from "../../redux/store";
import s from "./Messages.module.css";
import Message from "../Message/Message";
import Loader from "../loader/Loader";
const Messages = (props) => {
    const [isLoader, setIsLoader] = useState(true);
    useEffect( () => {

      // получаю смс
      const unsubscribe = firebase.firestore().collection("messages").orderBy("date", "asc").limitToLast(15).onSnapshot(
        function(snapshot) {
          let messages = [];
          snapshot.forEach( doc => messages.push({ userId: doc.data().userId, message: doc.data().message, userEmail: doc.data().userEmail, mesId: doc.data().date.seconds}) )
          props.updateMessages( messages );
          setIsLoader(false);
      });
      return () => {
        unsubscribe();
      }
      
    }, [])

    let messagesDiv = useRef(null);
    if (messagesDiv.current) {
      setTimeout(() => {
        messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
      }, 1);
    }
    // ЕСЛИ ВИДИШЬ ЭТО - НАПИШИ, ЧТО НАШЕЛ ПАСХАЛКУ
    return(
       <div className={s.messages} ref={messagesDiv}>
           {isLoader 
           ? <Loader /> 
           : 
           props.messages.map( (m) => 
           <Message 
           key={m.mesId} 
           userId={m.userId} 
           message = {m.message}
           currentUserId= {props.id} 
           userEmail = {m.userEmail}/> )}
       </div>
    )
}
let mapStateToProps = (state) => {
    return{
      messages: state.messages,
      id: state.currentUser.uid,
    }
}

export default connect(mapStateToProps, {updateMessages})(Messages);

