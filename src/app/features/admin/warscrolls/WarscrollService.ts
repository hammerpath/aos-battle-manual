import { Warscroll } from "./types";

export interface WarscrollService {
  getByFactionName: (factionName: string) => Promise<Warscroll[]>;
  getByName: (name: string) => Promise<Warscroll | undefined>;
}

export default class WarscrollServiceImpl implements WarscrollService {
  private warscrolls: Warscroll[] = [
    {
      name: "Treelord",
      health: "1",
      save: "2",
      modelCount: "3",
      rangedWeapons: [{ name: "Some name" }],
      meleeWeapons: [{ name: "Some name" }],
      abilities: [{ name: "Some name" }],
      keywords: ["Sylvaneth"],
    },
    {
      name: "Dryads",
      health: "1",
      save: "2",
      modelCount: "3",
      abilities: [],
      keywords: [],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getByFactionName(_factionName: string) {
    return Promise.resolve(this.warscrolls);
  }

  async getByName(name: string) {
    const warscroll = this.warscrolls.find(
      (warscroll) => warscroll.name === name,
    );
    return Promise.resolve(warscroll);
  }
}
