import Sylvaneth from "../../armies/Sylvaneth.json";
import { Army, ArmyName } from "./types";

const getArmy = (name: ArmyName): Army => {
  const army = getAllArmies().find((army) => army.name === name);
  if (!army) {
    throw Error(`No army with name: ${name}`);
  }

  return army;
};

const getArmyNames = () => {
  // TODO - fix this casting
  return getAllArmies().map((army) => army.name) as ArmyName[];
};

const getAllArmies = (): Army[] => {
  return [Sylvaneth];
};

export { getArmy, getArmyNames };
