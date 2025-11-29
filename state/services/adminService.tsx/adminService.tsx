import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminService = createApi({
    reducerPath: "adminService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/admin" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        totalUserManage: builder.query<any, void>({
            query: () => ({
                url: `/total_users`,
                method: "GET",
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
        })
    })
})


export const { useTotalUserManageQuery, useUserRoleManageMutation, useUserStatusManageMutation } = adminService;