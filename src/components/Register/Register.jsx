import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import style from './Register.module.css'
import { Logo, Button, HeaderText } from '../../assets/styled/components';
import logoImg from '../../assets/img/logo.png'
import { NavLink, Redirect } from 'react-router-dom';
import cn from 'classnames';
import { validateEmail, validatePassword, validateConfirmPassword } from './../../validation/validation';
import Modal from '../Modal/Modal';
import 'firebase/auth';
import firebase from './../../firebase';

const RegisterNew = () => {


  const registerUser = (email, password) =>{
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( (userCredential) => {
            let user = userCredential.user;
            user.sendEmailVerification().then( () => {
              setOpenModal(true);
                console.log("emal sent");
            }).catch(function(error) {
                alert(error)
            });
        })
        
    } catch (error) {
        alert(error.message)
        throw error
    }
  }
  const closeModal = () => {
    setOpenModal(false)
    setTimeout(() => {
      <Redirect to='/auth' />
    }, 1000);
  }
  
  const [ openModal, setOpenModal ] = useState(false);

  return (
    
    <div className={style.formWrapper}>
      {
        openModal && <Modal closeModal={closeModal}/>
      }
      <Logo >
        <img src={logoImg} alt=""/>
      </Logo>
      <Formik 
        initialValues={{
          password: '',
          email: '',
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          registerUser(values.email, values.password)
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={style.form} >
            <HeaderText>Registration</HeaderText>
            <Field name="email" validate={validateEmail} className={cn(style.field, { [style.errorField] : (errors.email && touched.email) })} placeholder='Email'/>
            {errors.email && touched.email && <div className={style.error}>{errors.email}</div>}
  
            <Field name="password" type='password' validate={validatePassword} className={cn(style.field, { [style.errorField] : (errors.password && touched.password) })} placeholder='Password'/>
            {errors.password && touched.password && <div className={style.error}>{errors.password}</div>}

            <Field type="password" className={cn(style.field, { [style.errorField] : (errors.confirmPassword && touched.confirmPassword) })} placeholder='Confirm password' name="confirmPassword" validate={value => 
              validateConfirmPassword(values.password, value)
            }/>
            {errors.confirmPassword && touched.confirmPassword && (<div className={style.error}>{errors.confirmPassword}</div>)}
            <div>
              <p className={style.regLink}>Have an account? <NavLink className={style.link} to='/auth'>Sign in</NavLink> </p>
            </div>
  
            <Button type="submit">Sign up</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterNew;