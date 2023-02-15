import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
    emailForm: false,
    sideBar : true,
    selectEmail : null, 

  },
  reducers: {
    login: (state, action) => {
    
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    startForm: state => {
           state.emailForm = !state.emailForm;
          },
    endForm : state =>{
      state.emailForm = false;
    },
    setSide : state =>{
      state.sideBar = !state.sideBar;
    },
    setEmail :(state,action)=>{
      state.selectEmail=action.payload
    }
  },
})

export const { login, logout,startForm ,endForm,setSide,setEmail} = userSlice.actions

export const selectUser = (state: any) => state.user

export default userSlice.reducer