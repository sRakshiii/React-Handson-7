import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState : [{name:"Akash", age:22, course:"MERN", batch:"November"},{name:"John", age:24, course:"MERN", batch:"September"},{name:"Mohan", age:21, course:"MERN", batch:"November"},{name:"Ajay", age:25, course:"MERN", batch:"October"}],
    reducers:
    {
        editData : (state,action)=>{
            state[action.payload.loc] = action.payload.currentData;
            return(state);
        },
        addData:(state,action)=>{
            state[state.length] = action.payload;
            return(state);
        }
    }
})

export const {editData,addData} =dataSlice.actions
export default dataSlice.reducer;
