import './App.css';
import React from 'react';



import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './components/Admin';
import HomeAdmin from './components/HomeAdmin';
import ListDoc from './components/ListDoc';
import ListPatients from './components/ListPatients';
import AddDoctorCom from './components/AddDoctorCom';
import AddPatient from './components/AddPatient';
import UpdatePatient from './components/UpdatePatient';
import UpdateDoctorCom from './components/UpdateDoctorCom';
import Topbar from './components/topbar/Topbar';
import Sidbar from './components/sidbar/Sidbar';
import Home from './pages/home/Home';
import ReactDOM from "react-dom/client";
import PatientList from "./pages/patientList/PatientList";
import PatientProfile from "./pages/patientProfile/PatientProfile";
import RendezVous from "./pages/rendezVous/RendezVous"


function App() {
  return (
  
   <BrowserRouter>
      <Routes>
                  <Route path="/" exact element={<RegisterPage />} />
                  <Route path="/Login" exact element={<LoginPage />} />
                  <Route path='/admin' exact element={<HomeAdmin/>}></Route>
                  <Route path='/doctors' element={<ListDoc/>}></Route>
                  <Route path='/patients' element={<ListPatients/>}></Route>
                  <Route path='/add-doctor' element={<AddDoctorCom/>}></Route>
                  <Route path='/add-patient' element={<AddPatient/>}></Route>
                  <Route path='/update-patient/:email' element={<UpdatePatient/>}></Route>
                  <Route path='/update-doctor/:email' element={<UpdateDoctorCom/>}></Route>
                  <Route exact path="/doctor" element={<Home />}/>
                  <Route path="/patientsList" element={<PatientList />}/>
                  <Route path="/patientProfile/:email" element={<PatientProfile />}/>
                  <Route path="/redezVousList" element={<RendezVous />}/>
      </Routes>
    </BrowserRouter>
  );
}




export default App;
