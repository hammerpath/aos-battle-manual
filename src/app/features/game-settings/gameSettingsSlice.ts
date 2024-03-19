import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface GameSettingsState {
  battleTactics: boolean;
  grandStrategies: boolean;
}

const initialState: GameSettingsState = {
  battleTactics: true,
  grandStrategies: true,
};

const gameSettingsSlice = createSlice({
  name: "gameSettings",
  initialState,
  reducers: {
    toggleBattleTactics: (state) => {
      state.battleTactics = !state.battleTactics;
    },
    toggleGrandStrategies: (state) => {
      state.grandStrategies = !state.grandStrategies;
    },
  },
});

export const {
  toggleBattleTactics,
  toggleGrandStrategies,
} = gameSettingsSlice.actions;

export const selectBattleTacticsEnabled = (state: RootState) =>
  state.gameSettings.battleTactics;
export const selectGrandStrategiesEnabled = (state: RootState) =>
  state.gameSettings.grandStrategies;

export default gameSettingsSlice.reducer;
