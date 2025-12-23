import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const baseApi = createApi({
    reducerPath: "baseAPI",
    baseQuery,
    tagTypes: ["profile", "receiver", "volunteer_campaign", "admin"],
    endpoints: (builder) => ({}),
})