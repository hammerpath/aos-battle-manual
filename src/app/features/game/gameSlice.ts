import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Army = "Sylvaneth";
export type Phase =
  | "Hero"
  | "Movement"
  | "Shooting"
  | "Charge"
  | "Combat"
  | "Battleshock";
export type CurrentTurn = "player" | "opponent";

export interface GameState {
  currentTurn: CurrentTurn;
}

const initialState: GameState = {
  currentTurn: "player",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    userHasPriority: (state, action: PayloadAction<boolean>) => {
      state.currentTurn = action.payload ? "player" : "opponent";
    },
  },
});

export const { userHasPriority } = gameSlice.actions;

export const selectCurrentTurn = (state: RootState) => state.game.currentTurn;
export const selectHasPriority = (state: RootState) =>
  state.game.currentTurn === "player";

export default gameSlice.reducer;
