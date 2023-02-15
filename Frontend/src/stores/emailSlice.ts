import { createSlice } from '@reduxjs/toolkit'

export const emailSlice = createSlice({
    name: 'emailForm',
    initialState: {
        value: false
    },
    reducers: {
    setEmailFormOpened: (state) => {     
        state.value = true
        }


    },
})

export const { setEmailFormOpened } = emailSlice.actions

export const selectEmail = (state: any) => state.emailForm

export default emailSlice.reducer