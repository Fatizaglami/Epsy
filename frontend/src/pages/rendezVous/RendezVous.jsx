import React from 'react'
import "./rendezVous.css"

import { DataGrid } from '@mui/x-data-grid';
import {Link,  useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios"


export default function RendezVous() {
  const [allAppointements, setAllAppointements]=useState([]);
  const history = useNavigate();
  



  const isConfirmedField = async (appointement) =>{
    console.log(appointement.date)

 const body= {
    "date": appointement.date,
    "idPatient":appointement.idPatient,
    "idDoctor":appointement.idDoctor
  }

    await axios.post("http://localhost:8080/acceptappointment", body)
    .then((response => {
      history.push('/redezVousList')
    }).catch(error => {
        console.log(error)
      
    }))
  }



  const isNotConfirmedField = async (appointement) =>{
    console.log(appointement.date)

 const body= {
    "date": appointement.date,
    "idPatient":appointement.idPatient,
    "idDoctor":appointement.idDoctor
  }

    await axios.post("http://localhost:8080/denyappointment", body)
    .then((response => {
      history.push('/redezVousList')
    }).catch(error => {
        console.log(error)
      
    }))
  }


  const getallAppointements =  async () =>{
    await  axios.get("http://localhost:8080/rendezvous")
   
     .then((response => {
      setAllAppointements(response.data);
       console.log(response);
      
     })
     ).catch((e)=> console.log(e));
   }
   
   useEffect(()=>{
    getallAppointements();
  },[]);
  
  

  





  
  return (
    <div className="rendezVousList">
      
       <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>date</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>


                        {
                                allAppointements.map(
                                   appointement =>
                                    <tr key={appointement.email}>
                                      <td><img src="/profil.jpeg" alt="" className="patientListImage" /></td>
                                        <td>{appointement.nom}  </td>
                                        <td>{appointement.prenom}</td>
                                        <td>{appointement.date}</td>
                                        <td>
                                        <div className="actionsButtons">
         
          <button className="acceptButton" onClick = {() => {isConfirmedField(appointement);
           window.location.reload(false)}} >Accept</button>
          <button className="refuseButton" onClick = {() => {isNotConfirmedField(appointement);
           window.location.reload(false)}}>Refuse</button>

          </div>
                                        </td>

                                    </tr>
                                )
                            }


                        </tbody>
                        </table>
</div>
    
    </div>
    
  )
}
