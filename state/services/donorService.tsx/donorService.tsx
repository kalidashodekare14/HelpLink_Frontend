import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const donorService = createApi({
    reducerPath: "donorService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/donor" }),
    endpoints: (builder) => ({
        joinCampaign: builder.mutation({
            query: ({ id, data }) => ({
                url: `/join_campaign/${id}`,
                method: "POST",
                body: data
            })
        })
    })
})


export const { useJoinCampaignMutation } = donorService;