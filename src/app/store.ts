import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";
import gameSettingsReducer from "./features/game-settings/gameSettingsSlice";
import { factionApi } from "./features/faction/factionService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { factionTypeApi } from "./features/faction-types/factionTypeService";
import { spellApi } from "./features/admin/spells/spellService";
import { abilityApi } from "./features/abilities/services/abilityService";

const store = configureStore({
  reducer: {
    [factionApi.reducerPath]: factionApi.reducer,
    [factionTypeApi.reducerPath]: factionTypeApi.reducer,
    [spellApi.reducerPath]: spellApi.reducer,
    [abilityApi.reducerPath]: abilityApi.reducer,
    game: gameReducer,
    gameSettings: gameSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      factionApi.middleware,
      factionTypeApi.middleware,
      spellApi.middleware,
      abilityApi.middleware,
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
