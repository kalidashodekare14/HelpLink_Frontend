import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileService = createApi({
    reducerPath: "profileService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/profile" }),
    tagTypes: ["profile"],
    endpoints: (builder) => ({
        profleInfo: builder.query({
            query: (email) => ({
                url: `/user_profile/${email}`,
                method: "GET"
            }),
            providesTags: ["profile"],
        }),
        profileImageUpload: builder.mutation({
            query: ({ email, data }) => ({
                url: `/image_upload/${email}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["profile"],
        }),
        profleInfoUpdate: builder.mutation({
            query: ({ email, data }) => ({
                url: `/user_info_update/${email}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["profile"],
        }),
    })
})

export const {
    useProfleInfoQuery,
    useProfileImageUploadMutation,
    useProfleInfoUpdateMutation
} = profileService