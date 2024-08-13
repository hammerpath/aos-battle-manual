import { GameSettings, LocalStorageGameSettings } from "./types";

export interface GetGameSettingsQuery {
  userId?: string;
  gameId?: string;
}

const useGetGameSettingsQuery = ({
  userId,
  gameId,
}: GetGameSettingsQuery = {}): {
  data: GameSettings | undefined;
  isLoading: boolean;
} => {
  if (userId || gameId) {
    throw new Error("No support for stored games yet.");
  }

  const gameSettingsLocalStorage = localStorage.getItem(
    "aos_battle_game_settings",
  );

  if (!gameSettingsLocalStorage) {
    return { data: undefined, isLoading: false };
  }

  const gameSettings = JSON.parse(
    gameSettingsLocalStorage,
  ) as LocalStorageGameSettings;

  return { data: gameSettings, isLoading: false };
};

const useAddGameSettingsMutation = () => {
  const mutation = (
    gameSettings?: GameSettings,
    { userId, gameId }: GetGameSettingsQuery = {},
  ) => {
    if (userId || gameId) {
      throw new Error("No support for stored games yet.");
    }

    if (!gameSettings) {
      localStorage.removeItem("aos_battle_game_settings");
      return;
    }

    localStorage.setItem(
      "aos_battle_game_settings",
      JSON.stringify(gameSettings),
    );
  };
  return [mutation];
};

export { useGetGameSettingsQuery, useAddGameSettingsMutation };
