import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminService = createApi({
    reducerPath: "adminService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/admin" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        // User Management
        totalUserManage: builder.query<any, { search: string, role: string, status: boolean | undefined }>({
            query: (params) => ({
                url: `/total_users`,
                method: "GET",
                params
            }),
            providesTags: ["Users"]
        }),

        userRoleManage: builder.mutation<any, { id: string, role: string }>({
            query: ({ id, role }) => ({
                url: `/user_role/${id}`,
                method: "PATCH",
                body: { role }
            }),
            invalidatesTags: ["Users"]
        }),

        userStatusManage: builder.mutation<any, { id: string, status: string }>({
            query: ({ id, status }) => ({
                url: `/user_active/${id}`,
                method: "PATCH",
                body: { status }
            }),
            invalidatesTags: ["Users"]
        }),

        // Campaign Management
        totalCamgaignManage: builder.query<any, { search: string, request_status: string, delivery_status: string }>({
            query: (params) => ({
                url: "/total_campaign",
                method: "GET",
                params
            }),
            providesTags: ["Users"]
        }),

        campaignRequestStatusManage: builder.mutation({
            query: ({ id, request_status }) => ({
                url: `/campaign_request_status/${id}`,
                method: "PATCH",
                body: { request_status: request_status }
            }),
            invalidatesTags: ["Users"]
        }),

        campaignDeliveryStatusManage: builder.mutation({
            query: ({ id, delivery_status }) => ({
                url: `/campaign_delivery_status/${id}`,
                method: "PATCH",
                body: { delivery_status }
            }),
            invalidatesTags: ["Users"]
        })
    })
})


export const {
    useTotalUserManageQuery,
    useUserRoleManageMutation,
    useUserStatusManageMutation,
    useTotalCamgaignManageQuery,
    useCampaignRequestStatusManageMutation,
    useCampaignDeliveryStatusManageMutation
} = adminService;