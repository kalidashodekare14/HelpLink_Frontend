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
        })
    })
})

export const { useHelpRequestMutation, useCampaignUploadImagesMutation, useRequestTrackQuery } = receiverService;