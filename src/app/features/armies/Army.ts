import Sylvaneth from "../../armies/Sylvaneth.json";
import { Ability, Army, ArmyName } from "./types";

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

const mapAbilities = (...abilities: (Ability[] | undefined)[]) => {
  return abilities.reduce<Ability[]>((acc, currentArray) => {
    if (currentArray !== undefined) {
      acc = acc.concat(currentArray);
    }
    return acc;
  }, []); 
}

export { getArmy, getArmyNames, mapAbilities };
