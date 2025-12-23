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

export const { useHelpRequestMutation, useRequestTrackQuery } = receiverService;