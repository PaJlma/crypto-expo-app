import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Crypto, Market } from "types/crypto.types";

export const cryptoService = createApi({
  reducerPath: "crypto",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coinlore.net/api/" }),
  endpoints: (builder) => ({
    getCryptoList: builder.query<{ data: Crypto[] }, void>({
      query: () => "tickers/",
    }),

    getCryptoById: builder.query<Crypto[], string>({
      query: (id) => `ticker/?id=${id}`,
    }),

    getCryptoMarketsById: builder.query<Market[], string>({
      query: (id) => `coin/markets/?id=${id}`,
    }),
  }),
});

export const {
  useGetCryptoListQuery,
  useGetCryptoByIdQuery,
  useGetCryptoMarketsByIdQuery,
} = cryptoService;
