import axios from "axios";

class LogoutService{

    logout(){
        return axios.get("http://localhost:8080/logout")
    }

}
export default new LogoutService()