import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';


const initialState = { username: '', password: '' };
const msgError =""


export const Signin = () => {
    const [form, setForm] = useState(initialState);
    const [msgError, setMsgError] = useState("");
  const validate = Yup.object().shape({
    username: Yup.string()
      .email('username is invalid')
      .required('username is required'),
    password: Yup.string()
      
      .required('Password is required'),

  })
 
  const handleSubmit = (values) => {
   axios.get("http://localhost:8080/user/home", {
      
        auth: {
          username: values.username,
          password: values.password
        }
      }).then(
        res=>{
            if(res.status==200)  console.log(res.data.role[0].authority)

            if(res.data.role[0].authority=="patient"){
              
            }
            else if(res.status==401) console.log(res.data.role[0])
        }).catch(e => {setMsgError("Email or password is incorrect");
	})
           
           
  
       
    
  }
  return (
    <Formik
      initialValues={{
      
        username: '',
        password: '',
    
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        //setForm({...form ,  prenom: values.prenom, nom: values.nom, email: values.email, password: values.password })
        handleSubmit(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign in</h1>
          <p className="text-danger text-center">{msgError}</p>
          <Form >
            <TextField label="Email" name="username" type="username" />
            <TextField label="Password" name="password" type="password"/>
            <button className="btn btn-dark mt-3" type="submit" >Login</button> &nbsp;
            </Form>
        </div>
      )}
    </Formik>
    
  );

      }
    