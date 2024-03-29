import { createSlice } from "@reduxjs/toolkit";
const Contentslice = createSlice({
    name:"img",
    initialState:{
        // title:null,
        // story:null
        content:[],
        update:null
    },
    reducers:{
        addContent:(state, action)=>{
            state.content.push(action.payload);
           
        },
        removeContent: (state, action)=>{
            console.log("remove", action.payload)
            state.content=state.content.filter((v)=>v!=state.content[action.payload])

        }
    }
})
export const {addContent , removeContent, updateContent} = Contentslice.actions;
export default Contentslice.reducer;