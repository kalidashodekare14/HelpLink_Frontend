import { baseApi } from "@/state/baseApi";



export const receiverService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        helpRequest: builder.mutation({
            query: (body) => ({
                url: "/api/v1/receiver/receiver_request",
                method: "POST",
                body
            }),
            invalidatesTags: ["receiver"],
        }),
        campaignUploadImages: builder.mutation({
            query: (formData) => ({
                url: "/api/v1/receiver/campaign_image_upload",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["receiver"],
        }),
        requestTrack: builder.query({
            query: (email) => (
                {
                    url: `/api/v1/receiver/receiver_track_request/${email}`,
                    method: "GET",
                }
            ),
            providesTags: ["receiver"],
        }),
        campaignRequestInfo: builder.query({
            query: (id) => (
                {
                    url: `/api/v1/receiver/campaign_request_info/${id}`,
                    method: "GET",
                }
            ),
            providesTags: ["receiver"],
        }),
        campaignRequestUpdate: builder.mutation({
            query: ({ id, updateData }) => ({
                url: `/api/v1/receiver/campaign_request_update/${id}`,
                method: "PATCH",
                body: updateData
            }),
            invalidatesTags: ["receiver"],
        }),
    })
})

export const {
    useHelpRequestMutation,
    useCampaignUploadImagesMutation,
    useRequestTrackQuery,
    useCampaignRequestInfoQuery,
    useCampaignRequestUpdateMutation
} = receiverService;