import { ICampaignDetailsResponse, ICampaignResponse } from "@/types/public";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface TotalCampaignQuery {
    search?: string;
    division?: string;
    district?: string;
    upazila?: string;
}


export const publicService = createApi({
    reducerPath: "publicService",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/public" }),
    endpoints: (builder) => ({
        getTotalCampaigns: builder.query<ICampaignResponse, TotalCampaignQuery, void>({
            query: (params) => ({
                url: "/total_campaign",
                method: "GET",
                params
            })
        }),
        getCampaignDetails: builder.query<ICampaignDetailsResponse, string>({
            query: (id) => ({
                url: `/campaign_details/${id}`,
                method: "GET",
            })
        })
    })
})

export const {
    useGetTotalCampaignsQuery,
    useGetCampaignDetailsQuery
} = publicService