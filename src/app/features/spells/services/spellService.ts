import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PocketBaseListResponse } from "../../../../server/types";
import { Spell } from "../types";
import config from "../../../config";

export const spellApi = createApi({
  reducerPath: "spellApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.pocketBaseUrl}/api/collections/spell/records`,
  }),
  endpoints: (builder) => ({
    getSpellsByFactionTypeId: builder.query<Spell[], string>({
      query: (factionTypeId) => `?filter=(factionTypeId="${factionTypeId}")`,
      transformResponse: (response: PocketBaseListResponse<Spell>) =>
        response.items,
    }),
  }),
});

export const { useGetSpellsByFactionTypeIdQuery } = spellApi;
