import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Ability } from "../types";
import { PhaseNew } from "../../phase/types";
import { AbilityUsage, Turn } from "./types";
import config from "../../../config";
import { PocketBaseListResponse } from "../../../../server/types";

export interface GetAbilityByPhaseQuery {
  factionTypeId: string;
  phase: PhaseNew;
}

interface PbAbilityTurn {
  id: string;
  name: Turn;
}

interface PbAbilityExpand {
  abilityUsageId?: AbilityUsage[];
  abilityTurnId?: PbAbilityTurn;
}

interface PbAbility {
  id: string;
  name: string;
  declare?: string;
  effect: string;
  commandPoints: number;
  expand?: PbAbilityExpand;
}

interface AbilityResponse {
  items: PbAbility[];
}

export const abilityApi = createApi({
  reducerPath: "abilityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.pocketBaseUrl}/api/collections/ability/records`,
  }),
  tagTypes: ["Ability"],
  endpoints: (builder) => ({
    getAbilitiesByFactionTypeId: builder.query<Ability[], string>({
      query: (factionTypeId) => `?filter=(factionTypeId="${factionTypeId}")`,
      transformResponse: (response: PocketBaseListResponse<Ability>) =>
        response.items,
    }),
    getAbilitiesByPhase: builder.query<Ability[], GetAbilityByPhaseQuery>({
      query: ({ factionTypeId }) =>
        `?filter=(factionTypeId="${factionTypeId}")&expand=abilityUsageId,abilityTurnId`,
      transformResponse: (response: AbilityResponse, _meta, { phase }) =>
        response.items
          .filter((item) =>
            item.expand?.abilityUsageId?.some(
              (abilityUsage) => abilityUsage.name === phase,
            ),
          )
          .map((pbAbility) => {
            return {
              id: pbAbility.id,
              name: pbAbility.name,
              declare: pbAbility.declare,
              effect: pbAbility.effect,
              commandPoints: pbAbility.commandPoints,
              turn: pbAbility.expand?.abilityTurnId?.name,
            };
          }),
      providesTags: (_result, _error, query) => [
        { type: "Ability", factionTypeId: query.factionTypeId },
      ],
    }),
  }),
});

export const {
  useGetAbilitiesByFactionTypeIdQuery,
  useGetAbilitiesByPhaseQuery,
} = abilityApi;
