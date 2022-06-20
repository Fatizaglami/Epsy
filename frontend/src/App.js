import './App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListDoc from './components/ListDoc';
import AddDoctorCom from './components/AddDoctorCom';
import UpdateDoctorCom from './components/UpdateDoctorCom';
import ListPatients from './components/ListPatients';
import HomeAdmin from './components/HomeAdmin';
import AddPatient from './components/AddPatient';
import UpdatePatient from './components/UpdatePatient';

function App() {
  return (
    <div>
      <Router>
        
           <HeaderComponent/>
    
              <div className="container">
                <Routes>
                  
                  <Route path='/' exact element={<HomeAdmin/>}></Route>
                  <Route path='/doctors' element={<ListDoc/>}></Route>
                  <Route path='/patients' element={<ListPatients/>}></Route>
                  <Route path='/add-doctor' element={<AddDoctorCom/>}></Route>
                  <Route path='/add-patient' element={<AddPatient/>}></Route>
                  <Route path='/update-patient/:email' element={<UpdatePatient/>}></Route>
                  <Route path='/update-doctor/:email' element={<UpdateDoctorCom/>}></Route>


                </Routes>
              </div>
            <FooterComponent/>
       
       </Router>
    </div>
  );
}

export default App;
