import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PocketBaseResponse } from "../../../../server/types";
import { FactionType } from "./types";

export const factionTypeApi = createApi({
  reducerPath: "factionTypeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090/api/collections/factionType/records",
  }),
  endpoints: (builder) => ({
    getFactionTypesByFactionId: builder.query<FactionType[], string>({
      query: (factionId) => `?filter=(factionId="${factionId}")`,
      transformResponse: (response: PocketBaseResponse<FactionType>) =>
        response.items,
    }),
    getFactionTypeById: builder.query<FactionType, string>({
      query: (factionTypeId) => `/${factionTypeId}`,
    }),
    addFactionType: builder.mutation<FactionType, Omit<FactionType, "id">>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
    editFactionType: builder.mutation<void, FactionType>({
      query: ({ id, ...patch }) => ({
        url: id,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteFactionType: builder.mutation<null, string>({
      query: (id) => ({
        url: id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFactionTypesByFactionIdQuery,
  useGetFactionTypeByIdQuery,
  useAddFactionTypeMutation,
  useEditFactionTypeMutation,
  useDeleteFactionTypeMutation,
} = factionTypeApi;
