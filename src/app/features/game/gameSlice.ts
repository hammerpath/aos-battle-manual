import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ArmyName } from "../armies/types";

export type CurrentTurn = "mine" | "opponent";

export interface GameState {
  currentTurn: CurrentTurn;
  playerArmyName?: ArmyName;
  opponentArmyName?: ArmyName;
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
    choosePlayerArmy: (state, action: PayloadAction<ArmyName | undefined>) => {
      state.playerArmyName = action.payload;
    },
  },
});

export const { userHasPriority, choosePlayerArmy } = gameSlice.actions;

export const selectCurrentTurn = (state: RootState) => state.game.currentTurn;
export const selectHasPriority = (state: RootState) =>
  state.game.currentTurn === "mine";
export const selectMyArmyName = (state: RootState) => state.game.playerArmyName;
export const selectPlayerArmyName = (state: RootState) =>
  state.game.playerArmyName;

export default gameSlice.reducer;
