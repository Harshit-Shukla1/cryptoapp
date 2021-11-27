import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '6cdcffc50cmsh7239aad113b2756p1c2c02jsn9d444b988209'
}
//coinranking- get exchanges
//https://rapidapi.com/Coinranking/api/coinranking1/
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest  = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),

        getExchanges : builder.query({
            query: () => createRequest(`/exchanges`)
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
        })
    })
});

export const { useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;


// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coin ranking1.p.rapidapi.com',
//       'x-rapidapi-key': '666c0d018fmsh90c8200525153bcp1f69a7jsn111faf9fab43'
//     }
//   };