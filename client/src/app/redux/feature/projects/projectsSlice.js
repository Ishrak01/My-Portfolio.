import { createSlice } from "@reduxjs/toolkit"


const initialState={
  items:[],
  status: null, 
}

const projectsSlice=createSlice({
  name:"projects",
  initialState,
  reducers: {}

})


export const {}=projectsSlice.actions
export default projectsSlice.reducer