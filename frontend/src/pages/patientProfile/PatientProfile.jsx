import React from 'react'
import "./patientProfile.css"
import {PermIdentity, AlternateEmail, LocalPhone ,Wc , CalendarToday } from "@material-ui/icons" 
import {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate, useParams} from "react-router-dom";

export default function PatientProfile() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [cin, setCin] = useState('')
  const [tel, setTel] = useState('')
  const [date_naissance, setDateNaissance] = useState('')
  const [sex, setSex] = useState('')
  const [situation, setSituation] = useState('')
  
  const history = useNavigate();
  const {email} = useParams();
  console.log(email)

  const [patients, setPatients]=useState([]);
  const getPatientInfos =  async () =>{
   await  axios.get("http://localhost:8080/"+ email)
  
    .then((response => {
      setNom(response.data.nom)
      setPrenom(response.data.prenom)
      
      setTel(response.data.tel)
      setCin(response.data.cin)
      setDateNaissance(response.data.date_naissance)
      setSex(response.data.sex)
      setSituation(response.data.situation)
      

      console.log(nom);
    })
    ).catch((e)=> console.log(e));
  }
  useEffect(()=>{
    getPatientInfos();
  },[]);





  return (
    <div className="patientProfile">
      <div className="patientTitleContainer">
        <h1 className="patientTitle">Patient's Profile</h1>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowTop">
            <img src="/profil.jpeg" alt=""  className="patientShowImg"/>

            <div className="patientShowTopTitle">
              <span className="patientShowUserName">{prenom} {nom}</span>
              <span className="patientShowUserMaladie">Depression</span>
            </div>
          </div>
          <div className="patientShowBottom"><span className="patientShowTitle">Account Details</span>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">{prenom} {nom}</span>
          </div>
          <div className="patientShowInfo">
          <AlternateEmail className="patientShowIcon" />
          <span className="patientShowInfoTitle"> {email}</span>
          </div>
          <div className="patientShowInfo">
          <LocalPhone className="patientShowIcon" />
          <span className="patientShowInfoTitle">{tel}</span>
          </div>
          <div className="patientShowInfo">
          <CalendarToday className="patientShowIcon" />
          <span className="patientShowInfoTitle"> {date_naissance}</span>
          </div>
          <div className="patientShowInfo">
          <Wc className="patientShowIcon" />
          <span className="patientShowInfoTitle"> {sex}</span>
          </div>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">{situation} </span>
          </div>
          <div className="patientShowInfo">
          <PermIdentity className="patientShowIcon" />
          <span className="patientShowInfoTitle">{cin} </span>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
