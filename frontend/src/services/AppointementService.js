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

    sendAppointement(appointement){
        for(var property in appointement) {
            console.log(property + "=" + appointement[property]);
        }
        
        return axios.post("http://localhost:8080/rv/sendAppointmentRequest",appointement).catch((error)=>console.log("post inv err" + error));
    }
    getRendezVousNotificationByDoctor(){
        return axios.get("http://localhost:8080/rv/rendezvous");
    }

    acceptAppointement(appointement){
        for(var property in appointement) {
            console.log(property + "=" + appointement[property]);
        }
        return axios.post("http://localhost:8080/rv/acceptappointment", appointement);
    }
    denyAppointement(appointement){
        return axios.post("http://localhost:8080/rv/denyappointment", appointement);
    }
}
export default new AppointementService()