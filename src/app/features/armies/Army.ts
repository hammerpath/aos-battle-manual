import Sylvaneth from "../../armies/sylvaneth/Sylvaneth.json";
import OssiarchBonereapers from "../../armies/ossiarch-bonereapers/OssiarchBonereapers.json";
import { Army } from "./types";

const getArmy = (name?: string) => {
  const army = getAllArmies().find((army) => army.name === name);

  return army;
};

const getAllArmies = (): Army[] => {
  return [Sylvaneth, OssiarchBonereapers];
};

export { getArmy };
