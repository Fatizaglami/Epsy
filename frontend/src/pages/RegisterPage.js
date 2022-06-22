import '../App.css';
import React from 'react';
import signimg from '../assets/psyy.svg'
import { Signup } from '../components/Signup';
import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <Header/>
    
      <div className="container mt-3">
      <div className="row">
          <div className="col-md-5">
            <Signup/>
          </div>
          <div className="col-md-7 my-auto7">
            <img className="img-fluid w-80" src={signimg}   alt=""/>
            <Link to={'/Login'}  >Already have an account ? Sign in </Link>
          </div>
      </div>
    </div>
       <FooterComponent/>
    </div>
  );
}




export default RegisterPage;
