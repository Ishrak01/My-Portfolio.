"use client"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice= createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5500"
    baseUrl: "https://server.ishrakhasin.com"



}),

 
  endpoints:(builder)=> ({}),
})

