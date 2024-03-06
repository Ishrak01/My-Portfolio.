import { configureStore } from "@reduxjs/toolkit"
import projectsReducer from "./feature/projects/projectsSlice"

import { apiSlice } from "./feature/api/apiSlice"


const store= configureStore({
  reducer: {
   
    [apiSlice.reducerPath]: apiSlice.reducer,
    
  
    projects:projectsReducer
  },

  devTools:"",

  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
