import React from 'react'
import {useEffect, useState} from 'react'
import "./patientList.css"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import PatientService from '../../services/PatientService';
import axios from "axios"
import Topbar from '../../components/topbar/Topbar';
import Sidbar from '../../components/sidbar/Sidbar';

export default function PatientList(){

  const [patients, setPatients]=useState([]);
const getPatientByDoctor =  async () =>{
 await  axios.get("http://localhost:8080/patientof")

  .then((response => {
    setPatients(response.data);
    console.log(response);
  })
  ).catch((e)=> console.log(e));
}
 useEffect(()=>{
    getPatientByDoctor();
  },[]);
    
      
  return (
    <div>
      <Topbar/>
      <div className='homeDoc'>
        <Sidbar/>
      
    <div className='patientsList'>
       <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Tel</th>
                                <th>Cin</th>
                                <th>Password</th>
                                <th>Sexe</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map(
                                   patient =>
                                    <tr key={patient.email}>
                                      <td><img src="/profil.jpeg" alt="" className="patientListImage" /></td>
                                        <td>{patient.nom}  </td>
                                        <td>{patient.prenom}</td>
                                        <td>{patient.email}</td>
                                        <td>{patient.tel}</td>
                                        <td>{patient.password}</td>
                                        <td>{patient.cin}</td>
                                        <td>{patient.sex}</td>
                                        <td>
                                        <Link to={"/patientProfile/"+patient.email}>
              <button className="ButtonpatientList">See More</button></Link>
                                        </td>

                                    </tr>
                                )
                            }


                        </tbody>
                        </table>


    </div>
    
 
    </div>
    </div>
    </div>)
  
}