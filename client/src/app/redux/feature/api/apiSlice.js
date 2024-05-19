"use client"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice= createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
  
    baseUrl: "https://server.ishrakhasin.com"



}),

 
  endpoints:(builder)=> ({}),
})

