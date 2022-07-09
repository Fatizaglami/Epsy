import axios from "axios";

class SuiviService {

    getTristesse(patient){
        
    
        return axios.get("http://localhost:8080/api/suivi/gettristesse",{params:patient});
    }

    getStress(patient){
        return axios.get("http://localhost:8080/api/suivi/getstress",{params:patient});
    }
    getSommeil(patient){
        return axios.get("http://localhost:8080/api/suivi/getsommeil",{params:patient});
    }
    getFatigue(patient){
        return axios.get("http://localhost:8080/api/suivi/getfatigue",{params:patient});
    }
    addSuiviPatient(suivi){
        return axios.post("http://localhost:8080/api/suivi",suivi);
    }
}
export default new SuiviService()