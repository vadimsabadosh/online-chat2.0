import React, { useState } from "react";
import s from "./Footer.module.css";
import mailImg from "../../assets/img/mail.svg";
import firebase from './../../firebase';

const Footer = (props) => {
    const [inputValue, setInputValue] = useState("");
    let submitForm = (e, message) => {
        e.preventDefault();
        if(message) {
            firebase.firestore().collection("messages").add({
                    userEmail: props.userEmail,
                    message,
                    userId: props.uid,
                    date: new Date(),
                })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            setInputValue("");
        }
    }
    return(
        <div className={s.footer}>
            <form onSubmit={ (e) => submitForm(e, inputValue)} className={s.form}>
                <div className={s.inputWrapper}>
                    <input value={inputValue} onChange={ (e) => setInputValue(e.target.value) } className={s.input} type="text"/>
                </div>
                <button className={s.button}>
                    <img src={mailImg} alt=""/>
                </button>
            </form>
        </div>
    )
}
export default Footer;