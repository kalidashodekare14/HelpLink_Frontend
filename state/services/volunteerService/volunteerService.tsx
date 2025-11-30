import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const volunteerService = createApi({
    reducerPath: "volunteerService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/volunteer" }),
    tagTypes: ["volunteer_campaign"],
    endpoints: (builder) => ({
        totalCampaigns: builder.query<any, void>({
            query: () => ({
                url: "/total_campaign",
                method: "GET",
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
    })
})


export const {
    useTotalCampaignsQuery,
    useCampaignRequestStatusChangeMutation
} = volunteerService;