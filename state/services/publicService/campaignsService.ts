import { baseApi } from "@/state/baseApi";
import { ICampaignDetailsResponse, ICampaignResponse } from "@/types/public";

interface TotalCampaignQuery {
    search?: string;
    division?: string;
    district?: string;
    upazila?: string;
}


export const publicService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTotalCampaigns: builder.query<ICampaignResponse, TotalCampaignQuery, void>({
            query: (params) => ({
                url: "/api/v1/public/total_campaign",
                method: "GET",
                params
            })
        }),
        getCampaignDetails: builder.query<ICampaignDetailsResponse, string>({
            query: (id) => ({
                url: `/api/v1/public/campaign_details/${id}`,
                method: "GET",
            })
        }),
        weatherRiskTrack: builder.query({
            query: () => ({
                url: `/api/v1/public/weather_risk_track`,
                method: 'GET',
            })
        })
    })
})

export const {
    useGetTotalCampaignsQuery,
    useGetCampaignDetailsQuery,
    useWeatherRiskTrackQuery
} = publicService