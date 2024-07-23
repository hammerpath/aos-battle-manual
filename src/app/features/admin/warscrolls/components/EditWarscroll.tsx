import Box from "../../../../components/Box";
import Header from "../../../../components/Header";
import { Page } from "../../../../components/Page";
import PageContent from "../../../../components/PageContent";
import TextField from "../../../../components/TextField";
import EditAbility, { Ability } from "../../abilities/components/EditAbility";
import AutoComplete from "../../../../components/AutoComplete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import EditMeleeWeapon, {
  MeleeWeapon,
} from "../../../weapons/melee/components/EditMeleeWeapon";
import EditRangedWeapon, {
  RangedWeapon,
} from "../../../weapons/ranged/components/EditRangedWeapon";

export interface EditWarscrollProps {}

const EditWarscroll: React.FC<EditWarscrollProps> = function () {
  const existingKeywords = ["Test1", "Test2"];
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [meleeWeapons, setMeleeWeapons] = useState<MeleeWeapon[]>([]);
  const [rangedWeapons, setRangedWeapons] = useState<RangedWeapon[]>([]);

  const handleAbilityChange = (ability: Ability) => {
    setAbilities(
      abilities.map((x) => (x.name === ability.name ? { ...ability } : x)),
    );
  };

  return (
    <Page>
      <Box>
        <TextField label="Name" />
        <Header>Characteristics</Header>
        <TextField label="Move" />
        <TextField label="Health" />
        <TextField label="Control" />
        <TextField label="Save" />
        <Header>Unit details</Header>
        <TextField label="Model count" />
        <TextField label="Points" />
        <Header>Ranged Weapons</Header>
        {rangedWeapons.map((rangedWeapon) => {
          return <EditRangedWeapon rangedWeapon={rangedWeapon} />;
        })}
        <PageContent>
          <span onClick={() => setRangedWeapons([...rangedWeapons, {}])}>
            Add ranged weapon <AddCircleOutlineIcon />
          </span>
        </PageContent>
        <Header>Melee Weapons</Header>
        {meleeWeapons.map((meleeWeapon) => {
          return <EditMeleeWeapon meleeWeapon={meleeWeapon} />;
        })}
        <PageContent>
          <span onClick={() => setMeleeWeapons([...meleeWeapons, {}])}>
            Add melee weapon <AddCircleOutlineIcon />
          </span>
        </PageContent>
        <Header>Abilities</Header>
        {abilities.map((ability) => {
          return (
            <EditAbility ability={ability} onChange={handleAbilityChange} />
          );
        })}
        <PageContent>
          <span onClick={() => setAbilities([...abilities, {}])}>
            Add ability <AddCircleOutlineIcon />
          </span>
        </PageContent>
        <Header>Keywords</Header>
        <AutoComplete options={existingKeywords} />
      </Box>
    </Page>
  );
};

export default EditWarscroll;
