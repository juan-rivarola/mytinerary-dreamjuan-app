import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const citiesApi = createApi({

    reducerPath: "citiesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-dreamjuan-back.herokuapp.com"
    }), 

    endpoints: (builder) =>({
        all:builder.query({
            query: (search)=> `/cities/?name=${search}`
        }),
        details:builder.query({
            query: (id)=> `/cities/${id}`
        }),
        getID:builder.query({
            query: (name)=> `/cities/${name}`
        }),
        editCity: builder.mutation({
            query:({name,data}) =>({
                url: `/cities/${name}`,
                method: 'PUT',
                body: data
            })
        }),
        createCity: builder.mutation({
            query: (data) =>({
                url: `/cities`,
                method: 'POST',
                body:data,              
            }),
        }),
    }),
})


export default citiesApi
export const {useCreateCityMutation,useGetIDQuery,useEditCityMutation,useDetailsQuery, useAllQuery} = citiesApi