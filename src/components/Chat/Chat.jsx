import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import firebase from "../../firebase";
import 'firebase/auth';
import { connect } from "react-redux";
import { updateCurrentUser } from "../../redux/store";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import Footer from "../Footer/Footer";
import s from "./Chat.module.css";

const Chat = (props) => {
    const [userEmail, setUserEmail] = useState("")
    const [isRedirect, setIsRedirect] = useState(false)
    useEffect( () => {
        firebase.auth().onAuthStateChanged( (user) => {
            (user && user.emailVerified) ? setIsRedirect(false) : setIsRedirect(true)
            props.updateCurrentUser(user.uid)
            setUserEmail(user.email);
          });
          // eslint-disable-next-line
    }, [] )
    let logOut = () => {
      firebase.auth().signOut();
    }
    if(isRedirect) return <Redirect to="/auth"/>
    return(
        <div className={s.chat}>
            <Header logOut={logOut}/>
            <Messages />
            <Footer uid = {props.id} userEmail = {userEmail}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
            id: state.currentUser.uid
        }
}
export default connect(mapStateToProps, { updateCurrentUser }) (Chat);