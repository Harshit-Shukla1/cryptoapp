import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '6cdcffc50cmsh7239aad113b2756p1c2c02jsn9d444b988209'

}

//Bing News Search API Documentation-news Trending
//https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest  = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews : builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery, } = cryptoNewsApi;