import { createSlice } from "@reduxjs/toolkit";
const Imgslice = createSlice({
    name:"img",
    initialState:{
        img:null
    },
    reducers:{
        addImg:(state, action)=>{
            state.img = action.payload
            console.log("slice",action.payload)
           
        },
        removeImg: (state, action)=>{

        }
    }
})
export const {addImg , removeImg} = Imgslice.actions;
export default Imgslice.reducer;