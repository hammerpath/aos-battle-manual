import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";
import gameSettingsReducer from "./features/game-settings/gameSettingsSlice";
import { factionApi } from "./features/faction/factionService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { factionTypeApi } from "./features/faction-types/factionTypeService";
import { abilityApi } from "./features/abilities/services/abilityService";
import { spellApi } from "./features/spells/services/spellService";
import { prayerApi } from "./features/prayers/services/prayerService";
import { battleFormationApi } from "./features/battleFormations/battleFormationService";

const store = configureStore({
  reducer: {
    [factionApi.reducerPath]: factionApi.reducer,
    [factionTypeApi.reducerPath]: factionTypeApi.reducer,
    [abilityApi.reducerPath]: abilityApi.reducer,
    [spellApi.reducerPath]: spellApi.reducer,
    [prayerApi.reducerPath]: prayerApi.reducer,
    [battleFormationApi.reducerPath]: battleFormationApi.reducer,
    game: gameReducer,
    gameSettings: gameSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      factionApi.middleware,
      factionTypeApi.middleware,
      abilityApi.middleware,
      spellApi.middleware,
      prayerApi.middleware,
      battleFormationApi.middleware,
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
