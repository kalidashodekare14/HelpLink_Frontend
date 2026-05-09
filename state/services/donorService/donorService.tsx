import { baseApi } from "@/state/baseApi";

export const donorService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bikashPayment: builder.mutation({
      query: (data: any) => ({
        url: "/api/v1/donor/bikash_payment",
        method: "POST",
        body: data,
      }),
    }),
    sslCommerzPayment: builder.mutation({
      query: (data: any) => ({
        url: "/api/v1/donor/sslcommerz_payment",
        method: "POST",
        body: data,
      }),
    }),
    donateTrack: builder.query({
      query: (email) => ({
        url: `/api/v1/donor/donate_track/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useDonateTrackQuery,
  useBikashPaymentMutation,
  useSslCommerzPaymentMutation,
} = donorService;
