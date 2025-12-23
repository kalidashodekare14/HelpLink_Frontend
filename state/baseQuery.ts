import { fetchBaseQuery } from "@reduxjs/toolkit/query";


const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    // prepareHeaders: (headers) => {

    // }

})

export default baseQuery;