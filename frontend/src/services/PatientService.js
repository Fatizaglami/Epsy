import axios from "axios";

const PATIENT_API_BASE_URL ="http://localhost:8080/patients"
class PatientService {

    getPatients(){
        return axios.get(PATIENT_API_BASE_URL);

    }
    addPatient(patient){
        return axios.post(PATIENT_API_BASE_URL, patient);
    }
    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/'+patientId);
    }
    updatePatient(patientId, patient){
        return axios.put(PATIENT_API_BASE_URL + '/' +patientId, patient);
    }
    deletePatient(patientId){
        return axios.delete(PATIENT_API_BASE_URL+'/'+patientId);
    
    }

    listPatient(){
        return axios.get(PATIENT_API_BASE_URL+'/patientof');
    }

    getNewMembers(){
        
        return axios.get('http://localhost:8080/patients/newpatients').catch((error)=>console.log("axios err" + error));
    }
    getPatientsCount(){
        return axios.get("http://localhost:8080/patients/patientcount").catch((error)=>console.log("get pat err" + error));
    }
}

export default new PatientService()