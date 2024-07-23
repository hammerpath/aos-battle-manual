import { Faction } from "./types";

export interface FactionService {
  getAll: () => Promise<Faction[]>;
}

export default class FactionServiceImpl implements FactionService {
  private factions: Faction[] = [
    {
      name: "Sylvaneth",
    },
    {
      name: "Lumineth",
    },
  ];

  async getAll() {
    return Promise.resolve(this.factions);
  }
}
