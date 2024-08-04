import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../../config";
import { Prayer } from "../types";
import { PocketBaseResponse } from "../../../../server/types";

export const prayerApi = createApi({
  reducerPath: "prayerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.pocketBaseUrl}/api/collections/prayer/records`,
  }),
  endpoints: (builder) => ({
    getPrayersByFactionTypeId: builder.query<Prayer[], string>({
      query: (factionTypeId) => `?filter=(factionTypeId="${factionTypeId}")`,
      transformResponse: (response: PocketBaseResponse<Prayer>) =>
        response.items,
    }),
  }),
});

export const { useGetPrayersByFactionTypeIdQuery } = prayerApi;
