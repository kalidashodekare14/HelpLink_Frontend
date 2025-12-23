import { baseApi } from "@/state/baseApi";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const profileService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        profileInfo: builder.query({
            query: (email) => ({
                url: `/api/v1/profile/user_profile/${email}`,
                method: "GET"
            }),
            providesTags: ["profile"],
        }),
        profileImageUpload: builder.mutation({
            query: ({ email, data }) => ({
                url: `/api/v1/profile/image_upload/${email}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["profile"],
        }),
        profileInfoUpdate: builder.mutation({
            query: ({ email, data }) => ({
                url: `/api/v1/profile/user_info_update/${email}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["profile"],
        }),
    })
})

export const {
    useProfileInfoQuery,
    useProfileImageUploadMutation,
    useProfileInfoUpdateMutation
} = profileService