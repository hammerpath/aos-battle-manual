import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Faction } from "../admin/factions/types";
import { PocketBaseResponse } from "../../../../server/types";
import config from "../../config";

export const factionApi = createApi({
  reducerPath: "factionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.pocketBaseUrl}/api/collections/faction/records`,
  }),
  tagTypes: ["Faction"],
  endpoints: (builder) => ({
    getAllFactions: builder.query<Faction[], void>({
      query: () => "",
      transformResponse: (response: PocketBaseResponse<Faction>) =>
        response.items,
      providesTags: () => [{ type: "Faction" }],
    }),
    getFactionById: builder.query<Faction, string>({
      query: (id) => id,
      providesTags: (_result, _error, id) => [{ type: "Faction", id }],
    }),
    addFaction: builder.mutation<Faction, Omit<Faction, "id">>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: () => [{ type: "Faction" }],
    }),
    editFaction: builder.mutation<void, Faction>({
      query: ({ id, ...patch }) => ({
        url: id,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: () => [{ type: "Faction" }],
    }),
    deleteFaction: builder.mutation<null, string>({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
      invalidatesTags: () => [{ type: "Faction" }],
    }),
  }),
});

export const {
  useGetAllFactionsQuery,
  useGetFactionByIdQuery,
  useAddFactionMutation,
  useEditFactionMutation,
  useDeleteFactionMutation,
} = factionApi;
