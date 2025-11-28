import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const receiverService = createApi({
    reducerPath: "receiverService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/receiver" }),
    endpoints: (builder) => ({
        helpRequest: builder.mutation({
            query: (body) => ({
                url: "/receiver_request",
                method: "POST",
                body
            })
        }),
        requestTrack: builder.query({
            query: (email) => (
                {
                    url: `/receiver_track_request/${email}`,
                    method: "GET",
                }
            )
        })
    })
})

export const { useHelpRequestMutation, useRequestTrackQuery } = receiverService;