import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    login: (state = {
        username: "",
        password: "",
      }, action) => {

        console.log("action" + action.payload.username);
       state = {...state, username:"doc@gmail.com", password:"hiba"};
       
    },
  },
});

export const { login } = counterSlice.actions;
export default counterSlice.reducer;