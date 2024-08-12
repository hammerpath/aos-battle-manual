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
  },
});

export const { userHasPriority } = gameSlice.actions;

export const selectCurrentTurn = (state: RootState) => state.game.currentTurn;

export default gameSlice.reducer;
