import { baseApi } from "@/state/baseApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const donorService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        joinCampaign: builder.mutation({
            query: ({ id, data }) => ({
                url: `/api/v1/donor/join_campaign/${id}`,
                method: "POST",
                body: data
            })
        }),
        bikashPayment: builder.mutation({
            query: (data: any) => ({
                url: "/api/v1/donor/bikash_payment",
                method: "POST",
                body: data
            })
        }),
        sslCommerzPayment: builder.mutation({
            query: (data: any) => ({
                url: "/api/v1/donor/sslcommerz_payment",
                method: "POST",
                body: data
            })
        }),
        donateTrack: builder.query({
            query: (email) => ({
                url: `/api/v1/donor/donate_track/${email}`,
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