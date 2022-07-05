import axios from 'axios'

class AppointementService{
    getLatestAppointements(){
        return  axios.get("http://localhost:8080/rv/latestappointment");
      }
    getAppointementCount(){
        return axios.get("http://localhost:8080/rv/appointmentcount").catch((error)=>console.log("get rv err" + error));
    }
    getInvitationsCount(){
        return axios.get("http://localhost:8080/rv/invitationcount").catch((error)=>console.log("get inv err" + error));
    }
    
}
export default new AppointementService()