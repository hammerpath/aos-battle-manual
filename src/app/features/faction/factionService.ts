import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Faction } from "../admin/factions/types";
import { PocketBaseResponse } from "../../../../server/types";

export const factionApi = createApi({
  reducerPath: "factionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090/api/collections/faction/records",
  }),
  endpoints: (builder) => ({
    getAllFactions: builder.query({
      query: () => "",
      transformResponse: (response: PocketBaseResponse<Faction>) =>
        response.items,
    }),
    addFaction: builder.mutation<Faction, Omit<Faction, "id">>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
    editFaction: builder.mutation<void, Faction>({
      query: ({ id, ...patch }) => ({
        url: id,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteFaction: builder.mutation<null, string>({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllFactionsQuery,
  useAddFactionMutation,
  useEditFactionMutation,
  useDeleteFactionMutation,
} = factionApi;
