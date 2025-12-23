import { baseApi } from "@/state/baseApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Overview Management
        overviewManage: builder.query<any, void>({
            query: () => ({
                url: "/api/v1/admin/overview_info",
                method: "GET",
            })
        }),
        // User Management
        totalUserManage: builder.query<any, { search: string, role: string, status: boolean | undefined }>({
            query: (params) => ({
                url: `/api/v1/admin/total_users`,
                method: "GET",
                params
            }),
            providesTags: ["admin"]
        }),

        userRoleManage: builder.mutation<any, { id: string, role: string }>({
            query: ({ id, role }) => ({
                url: `/api/v1/admin/user_role/${id}`,
                method: "PATCH",
                body: { role }
            }),
            invalidatesTags: ["admin"]
        }),

        userStatusManage: builder.mutation<any, { id: string, status: string }>({
            query: ({ id, status }) => ({
                url: `/api/v1/admin/user_active/${id}`,
                method: "PATCH",
                body: { status }
            }),
            invalidatesTags: ["admin"]
        }),

        // Campaign Management
        totalCamgaignManage: builder.query<any, { search: string, request_status: string, delivery_status: string }>({
            query: (params) => ({
                url: "/api/v1/admin/total_campaign",
                method: "GET",
                params
            }),
            providesTags: ["admin"]
        }),

        campaignRequestStatusManage: builder.mutation({
            query: ({ id, request_status }) => ({
                url: `/api/v1/admin/campaign_request_status/${id}`,
                method: "PATCH",
                body: { request_status: request_status }
            }),
            invalidatesTags: ["admin"]
        }),

        campaignDeliveryStatusManage: builder.mutation({
            query: ({ id, delivery_status }) => ({
                url: `/api/v1/admin/campaign_delivery_status/${id}`,
                method: "PATCH",
                body: { delivery_status }
            }),
            invalidatesTags: ["admin"]
        })
    })
})


export const {
    useOverviewManageQuery,
    useTotalUserManageQuery,
    useUserRoleManageMutation,
    useUserStatusManageMutation,
    useTotalCamgaignManageQuery,
    useCampaignRequestStatusManageMutation,
    useCampaignDeliveryStatusManageMutation
} = adminService;