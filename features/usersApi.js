import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: 'https://my-tinerary-dreamjuan-back.herokuapp.com',
    }),

    endpoints: (builder)=>({
        createuser: builder.mutation({
            query: (data) =>({
                url: `/auth/signup`,
                method: 'POST',
                body:data,              
            }),
        }),
        signout: builder.mutation({
            query: (data) =>({
                url: `/auth/signout`,
                method: 'POST',
                body:data,              
            }),
        }),
        signin: builder.mutation({
            query: (data) =>({
                url: `/auth/signin`,
                method: 'POST',
                body:data,              
            }),
        })
    })
})

export default usersApi
export const {useCreateuserMutation,useSignoutMutation,useSigninMutation} = usersApi