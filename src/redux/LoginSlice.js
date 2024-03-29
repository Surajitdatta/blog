import { createSlice } from "@reduxjs/toolkit"
const LoginSlice = createSlice({
    name:"login",
    initialState:{
        items:[]
    },
    reducers:{
        addEmail:(state, action)=>{
            state.items.push(action.payload)
            console.log(action.payload)

        },
        removeEmail: (state, action)=>{

        }
    }
})
export const {addEmail , removeEmail} = LoginSlice.actions;
export default LoginSlice.reducer;