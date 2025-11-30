import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const volunteerService = createApi({
    reducerPath: "volunteerService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/volunteer" }),
    tagTypes: ["volunteer_campaign"],
    endpoints: (builder) => ({
        // Overview Management
        volOverviewManage: builder.query<any, void>({
            query: () => ({
                url: "/volunteer_overview",
                method: "GET",
            })
        }),
        // Total Campaign
        totalCampaigns: builder.query<any, { search: string, request_status: string, delivery_status: string }>({
            query: (params) => ({
                url: "/total_campaign",
                method: "GET",
                params
            }),
            providesTags: ["volunteer_campaign"]
        }),
        campaignRequestStatusChange: builder.mutation({
            query: ({ id, request_status }) => ({
                url: `/request_status/${id}`,
                method: "PATCH",
                body: { request_status }
            }),
            invalidatesTags: ["volunteer_campaign"]
        }),
        campaignDeliveryStatusChange: builder.mutation({
            query: ({ id, delivery_status }) => ({
                url: `/delivery_status/${id}`,
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