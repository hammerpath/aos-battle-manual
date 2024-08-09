import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config";
import { BattleFormation } from "./types";
import { Ability } from "../abilities/types";

interface PbBattleFormationExpand {
  abilityId: Ability;
}

interface PbBattleFormation {
  id: string;
  name: string;
  expand: PbBattleFormationExpand;
}

interface PbBattleFormationResult {
  items: PbBattleFormation[];
}

export const battleFormationApi = createApi({
  reducerPath: "battleFormationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.pocketBaseUrl}/api/collections/battleFormation/records`,
  }),
  endpoints: (builder) => ({
    getBattleFormationsByFactionId: builder.query<BattleFormation[], string>({
      query: (factionTypeId) =>
        `?filter=(factionTypeId="${factionTypeId}")&expand=abilityId`,
      transformResponse: (response: PbBattleFormationResult) => {
        if (response.items.some((item) => !item.expand)) {
          throw new Error(
            "Response without expand property. Is View Rule set to admins only?",
          );
        }

        return response.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            ability: item.expand.abilityId,
          };
        });
      },
    }),
  }),
});

export const { useGetBattleFormationsByFactionIdQuery } = battleFormationApi;
