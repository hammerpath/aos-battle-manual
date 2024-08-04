import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Spell } from "./types";
import config from "../../../config";
import { PocketBaseResponse } from "../../../../server/types";

export const spellApi = createApi({
  reducerPath: "spellApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.pocketBaseUrl}/api/collections/spell/records`,
  }),
  endpoints: (builder) => ({
    getSpellsByFactionType: builder.query<Spell[], string>({
      query: (factionTypeId) => `?filter=(factionType="${factionTypeId}")`,
      transformResponse: (response: PocketBaseResponse<Spell>) =>
        response.items,
    }),
    getSpellById: builder.query<Spell, string>({
      query: (spellId) => spellId,
    }),
    editSpell: builder.mutation<void, Spell>({
      query: ({ id, ...patch }) => ({
        url: id,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetSpellsByFactionTypeQuery,
  useGetSpellByIdQuery,
  useEditSpellMutation,
} = spellApi;
