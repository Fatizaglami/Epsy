import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initialState = { prenom: '', nom: '', email: '', password: '', confirmPassword: '', cin:'' 
, tel:'' , situation:'' , sexe:'' };


export const Signup = () => {
    const [form, setForm] = useState(initialState);
  const validate = Yup.object().shape({
    prenom: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    nom: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (values) => {
  
       // e.preventDefault();
       const data={ prenom: values.prenom, nom:values.nom, email:values.email, password: values.password, confirmPassword: '', cin:'' 
       , tel:'' , situation:'' , sexe:'' }
        
    console.log(data);
    
        axios.post("http://localhost:8080/user/register",data)
        .then(response => {
        if(response.data!=null){
        this.setState({"show":true});
        setTimeout(() => this.setState({"show":false}),3000);
        }
        else{
        this.setState({"show":false});
        }});
        this.setState(this.initialState);
    
  }
  return (
    <Formik
      initialValues={{
        prenom: '',
        nom: '',
        email: '',
        password: '',
        confirmPassword: ''
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
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form >
            <TextField label="First Name" name="prenom" type="text"/>
            <TextField label="Last Name" name="nom" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password"/>
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button> &nbsp;
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
    
  );

}