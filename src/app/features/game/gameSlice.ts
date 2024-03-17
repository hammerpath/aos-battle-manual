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

export interface GameState {
  army?: Army;
  placedTerrain: boolean;
  placedCustomTerrain: boolean;
  deployedArmy?: boolean;
  // TODO - correct name?
  generalStrategy?: boolean;
  hasPriority?: boolean;
  commandPoints: number;
  generalOnBattlefield: boolean;
  phase?: Phase;
  round?: number;
}

const initialState: GameState = {
  placedTerrain: false,
  placedCustomTerrain: false,
  deployedArmy: false,
  commandPoints: 0,
  generalOnBattlefield: true,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    placeTerrain: (state) => {
      state.placedTerrain = true;
    },
    placeCustomTerrain: (state) => {
      state.placedCustomTerrain = true;
    },
    deployArmy: (state) => {
      state.deployedArmy = true;
    },
    userHasPriority: (state, action: PayloadAction<boolean>) => {
      state.hasPriority = action.payload;
      state.commandPoints = action.payload ? 1 : 2;
    },
    subtractCommandAbility: (state, action: PayloadAction<number>) => {
      state.commandPoints = state.commandPoints -= action.payload;
    },
    addCommandAbility: (state, action: PayloadAction<number>) => {
      state.commandPoints = state.commandPoints += action.payload;
    },
    generalOnBattlefield: (state, action: PayloadAction<boolean>) => {
      // TODO - this should not increment more than once.
      // Take new value as payload instead?
      state.commandPoints = state.commandPoints += action.payload ? 1 : 0;
      state.generalOnBattlefield = action.payload;
    },
  },
});

export const {
  placeTerrain,
  placeCustomTerrain,
  deployArmy,
  userHasPriority,
  subtractCommandAbility,
  addCommandAbility,
} = gameSlice.actions;

export const selectPlacedTerrain = (state: RootState) =>
  state.game.placedTerrain;
export const selectPlacedCustomTerrain = (state: RootState) =>
  state.game.placedCustomTerrain;
export const selectDeployedArmy = (state: RootState) => state.game.deployedArmy;
export const selectHasPriority = (state: RootState) => state.game.hasPriority;
export const selectCommandPoints = (state: RootState) =>
  state.game.commandPoints;

export default gameSlice.reducer;
