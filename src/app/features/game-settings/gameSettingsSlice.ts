import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface GameSettingsState {
  battleTactics: boolean;
}

const initialState: GameSettingsState = {
  battleTactics: false,
};

const gameSettingsSlice = createSlice({
  name: "gameSettings",
  initialState,
  reducers: {
    toggleBattleTactics: (state) => {
      state.battleTactics = !state.battleTactics;
    },
  },
});

export const { toggleBattleTactics } = gameSettingsSlice.actions;

export const selectBattleTacticsEnabled = (state: RootState) =>
  state.gameSettings.battleTactics;

export default gameSettingsSlice.reducer;
