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
        }),
        bikashPayment: builder.mutation({
            query: (data: any) => ({
                url: "/bikash_payment",
                method: "POST",
                body: data
            })
        }),
        sslCommerzPayment: builder.mutation({
            query: (data: any) => ({
                url: "/sslcommerz_payment",
                method: "POST",
                body: data
            })
        }),
        donateTrack: builder.query({
            query: (email) => ({
                url: `/donate_track/${email}`,
                method: "GET"
            })
        })
    })
})


export const {
    useJoinCampaignMutation,
    useDonateTrackQuery,
    useBikashPaymentMutation,
    useSslCommerzPaymentMutation
} = donorService;