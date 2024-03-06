import { apiSlice } from "../api/apiSlice"

export const projectsApi= apiSlice.injectEndpoints({
  
  tagTypes:["create","delete","update"],
  endpoints:(builder)=>({
  getData:builder.query({
    query:(data)=>({
      url:'/getData',
      method: 'GET',
      body:data
      
    }),
    
    providesTags: ['create','delete','update']
  }),

  create: builder.mutation({
    query: (data) => ({
      url: '/create',
      method: 'POST',
      body: data,
    }),
    invalidatesTags:['create']
  }),

  updateById: builder.mutation({
    query:({id,data})=>({
      url: `/updateById/${id}`,
      method: "PUT",
      body: data
    }),
    invalidatesTags:['update']
  }),

 deleteById: builder.mutation({
  query:(id)=>({
    url: `/deleteById/${id}`,
   
    method: "DELETE",
    }),
    invalidatesTags:['delete'],
   
  }),

  })
})

export const {useGetDataQuery,useCreateMutation,useUpdateByIdMutation,useDeleteByIdMutation}=projectsApi