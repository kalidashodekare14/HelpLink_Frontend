import { baseApi } from "@/state/baseApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const volunteerService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Overview Management
        volOverviewManage: builder.query<any, void>({
            query: () => ({
                url: "/api/v1/volunteer/volunteer_overview",
                method: "GET",
            })
        }),
        // Total Campaign
        totalCampaigns: builder.query<any, { search: string, request_status: string, delivery_status: string }>({
            query: (params) => ({
                url: "/api/v1/volunteer/total_campaign",
                method: "GET",
                params
            }),
            providesTags: ["volunteer_campaign"]
        }),
        campaignRequestStatusChange: builder.mutation({
            query: ({ id, request_status }) => ({
                url: `/api/v1/volunteer/request_status/${id}`,
                method: "PATCH",
                body: { request_status }
            }),
            invalidatesTags: ["volunteer_campaign"]
        }),
        campaignDeliveryStatusChange: builder.mutation({
            query: ({ id, delivery_status }) => ({
                url: `/api/v1/volunteer/delivery_status/${id}`,
                method: "PATCH",
                body: { delivery_status }
            }),
            invalidatesTags: ["volunteer_campaign"]
        }),
    })
})


export const {
    useVolOverviewManageQuery,
    useTotalCampaignsQuery,
    useCampaignRequestStatusChangeMutation,
    useCampaignDeliveryStatusChangeMutation
} = volunteerService;