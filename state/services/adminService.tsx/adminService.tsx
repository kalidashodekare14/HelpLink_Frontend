import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminService = createApi({
    reducerPath: "adminService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/admin" }),
    endpoints: (builder) => ({
        totalUserManage: builder.query<any, void>({
            query: () => ({
                url: `/total_users`,
                method: "GET",
            })
        })
    })
})


export const { useTotalUserManageQuery } = adminService;