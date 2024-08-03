import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type CurrentTurn = "mine" | "opponent";

export interface GameState {
  currentTurn: CurrentTurn;
  playerFactionId?: string;
  playerFactionTypeId?: string;
}

const initialState: GameState = {
  currentTurn: "mine",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    userHasPriority: (state, action: PayloadAction<boolean>) => {
      state.currentTurn = action.payload ? "mine" : "opponent";
    },
    choosePlayerFactionId: (
      state,
      action: PayloadAction<string | undefined>,
    ) => {
      state.playerFactionId = action.payload;
    },
    choosePlayerFactionTypeId: (
      state,
      action: PayloadAction<string | undefined>,
    ) => {
      state.playerFactionTypeId = action.payload;
    },
  },
});

export const {
  userHasPriority,
  choosePlayerFactionId,
  choosePlayerFactionTypeId,
} = gameSlice.actions;

export const selectCurrentTurn = (state: RootState) => state.game.currentTurn;
export const selectMyFactionId = (state: RootState) =>
  state.game.playerFactionId;
export const selectMyFactionTypeId = (state: RootState) =>
  state.game.playerFactionTypeId;
// "n47noos1gwfslfr";

export default gameSlice.reducer;
