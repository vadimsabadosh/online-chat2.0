import React from 'react';
import style from './Modal.module.css'

const Modal = (props) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <button className={style.btnClose} onClick={props.closeModal}>&times;</button>
        <div className={style.modalInner}>
        A message has been sent to the email you provided. Follow the link in the message and come back
        </div>
      </div>
    </div>
  );
};

export default Modal;