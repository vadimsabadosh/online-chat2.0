import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import style from './Auth.module.css'
import { Logo, Button, HeaderText } from '../../assets/styled/components';
import logoImg from '../../assets/img/logo.png'
import { NavLink, Redirect } from 'react-router-dom';
import cn from 'classnames';
import 'firebase/auth';
import firebase from '../../firebase';
import { validateEmail, validatePassword } from '../../validation/validation';

const AuthNew = () => {
    const [redirect, setRedirect] = useState(false);

    let logUser = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email.trim(), password.trim()).then((userCredential) => {
            let user = userCredential.user;
            if(user && user.emailVerified){
              setRedirect(true)
            }else{
              alert("Неверные данные или почта не подтверждена!")
            }
          })
          .catch((error) => {
            alert("Неверные данные или почта не подтверждена!")
          });
    }
    if(redirect) return <Redirect to="/"/>
  return (
    <div className={style.formWrapper}>
      <Logo >
        <img src={logoImg} alt=""/>
      </Logo>
      <Formik 
        initialValues={{
          password: '',
          email: '',
        }}
        onSubmit={(values) => {
          logUser(values.email, values.password)
        }}
      >
        {({ errors, touched }) => (
          <Form className={style.form}>
            <HeaderText>Login</HeaderText>
            <Field name="email" validate={validateEmail} className={cn(style.field, { [style.errorField] : (errors.email && touched.email) })} placeholder='Email'/>
            {errors.email && touched.email && <div className={style.error}>{errors.email}</div>}
  
            <Field name="password" type='password' validate={validatePassword} className={cn(style.field, { [style.errorField] : (errors.password && touched.password) })} placeholder='Password'/>
            {errors.password && touched.password && <div className={style.error}>{errors.password}</div>}

            <div>
              <p className={style.regLink}>Don't have an account? <NavLink className={style.link} to='/register'>Sign up</NavLink> </p>
            </div>
  
            <Button  type="submit">Login</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthNew;