import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ArmyName } from "../armies/types";

export type CurrentTurn = "player" | "opponent";

export interface GameState {
  currentTurn: CurrentTurn;
  playerArmyName?: ArmyName;
  opponentArmyName?: ArmyName;
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
    choosePlayerArmy: (state, action: PayloadAction<ArmyName | undefined>) => {
      state.playerArmyName = action.payload;
    },
    chooseOpponentArmy: (
      state,
      action: PayloadAction<ArmyName | undefined>
    ) => {
      state.opponentArmyName = action.payload;
    },
  },
});

export const { userHasPriority,   choosePlayerArmy,
  chooseOpponentArmy } = gameSlice.actions;

export const selectCurrentTurn = (state: RootState) => state.game.currentTurn;
export const selectHasPriority = (state: RootState) =>
  state.game.currentTurn === "player";
  export const selectArmyName = (state: RootState) =>
  state.game.currentTurn === "player" ? state.game.playerArmyName : state.game.opponentArmyName;
  export const selectPlayerArmyName = (state: RootState) =>
  state.game.playerArmyName;
export const selectOpponentArmyName = (state: RootState) =>
  state.game.opponentArmyName;

export default gameSlice.reducer;
