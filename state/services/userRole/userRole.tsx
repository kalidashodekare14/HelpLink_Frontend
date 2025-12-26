import { baseApi } from "@/state/baseApi";



export const userRoleService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userRole: builder.query<any, void>({
            query: () => ({
                url: `/api/v1/public/user_role`,
                method: "GET",
            }),
        })
    })
})


export const {
    useUserRoleQuery
} = userRoleService
