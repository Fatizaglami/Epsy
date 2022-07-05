import { counterSlice} from "./counterSlice";
import store from "./store";
import axios from "axios";

export const inseptorAxios = (username, password)=>{
    const actions = counterSlice.actions;
    const action =  {type:'login', payload:{username:username,password:password}}


    
       store.dispatch(actions.login( action)) ;
        axios.interceptors.request.use(function (config) {

          const user = store.getState();
          console.log("user" + user.username, user.password);
          config={...config, ...{auth:{username:user.username,password:user.password}} }
         
          return config;
        });

}