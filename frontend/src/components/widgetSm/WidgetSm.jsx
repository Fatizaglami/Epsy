import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"
import {useEffect, useState} from 'react';
import axios from "axios"

export default function WidgetSm() {
    const [newJoined, setNewJoined]=useState([]);
    const getNewJoined =  async () =>{
        await  axios.get("http://localhost:8080/newpatients")
       
         .then((response => {
            setNewJoined(response.data);
           console.log(response);
         })
         ).catch((e)=> console.log(e));
       }
       useEffect(()=>{
        getNewJoined();
      },[]);
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle"> New Join Members</span>
        

        <ul className="widgetSmList">
            {
               newJoined.map(
                    newPatient =>
            <li className="widgetSmListItem">
                <img src="profil.jpeg" alt="" className="widgetSmImage" />
                <div className="widgetSmPatient">
                    <span className="widgetSmPatientName">{ newPatient.nom}</span>
                    <span className="widgetSmPatientName">{newPatient.prenom}</span>
                    <span className="widgetSmPatientMaladie">Depression</span>
                </div>
<button className='widgetSmButton'>
    <Visibility className='widgetSmIcon' />
    Display
</button>
            </li>)}
            
        
        </ul>
    </div>
  )
}
