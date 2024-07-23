import Box from "../../../../components/Box";
import Header from "../../../../components/Header";
import { Page } from "../../../../components/Page";
import PageContent from "../../../../components/PageContent";
import TextField from "../../../../components/TextField";
import EditAbility, { Ability } from "../../abilities/components/EditAbility";
import AutoComplete from "../../../../components/AutoComplete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import EditMeleeWeapon from "../../../weapons/melee/components/EditMeleeWeapon";
import EditRangedWeapon from "../../../weapons/ranged/components/EditRangedWeapon";
import { Warscroll } from "../types";
import WarscrollServiceImpl from "../WarscrollService";
import { useParams } from "react-router-dom";

export interface EditWarscrollProps {}

const EditWarscroll: React.FC<EditWarscrollProps> = function () {
  const { name } = useParams<"name">();

  const [warscroll, setWarscroll] = useState<Warscroll | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const warscrollService = new WarscrollServiceImpl();
      // TODO - fix exclamation mark.
      const w = await warscrollService.getByName(name!);
      setWarscroll(w);
    })();
  }, [name]);

  const handleAbilityChange = (ability: Ability) => {
    setWarscroll(
      warscroll
        ? {
            ...warscroll,
            abilities: warscroll.abilities.map((existingAbility) =>
              existingAbility.name === ability.name
                ? { ...ability }
                : existingAbility,
            ),
          }
        : undefined,
    );
  };

  return (
    <Page>
      <Box>
        <TextField label="Name" value={warscroll?.name} />
        <Header>Characteristics</Header>
        <TextField label="Move" value={warscroll?.move} />
        <TextField label="Health" value={warscroll?.health} />
        <TextField label="Control" value={warscroll?.control} />
        <TextField label="Banishment" value={warscroll?.banishment} />
        <TextField label="Save" value={warscroll?.save} />
        <Header>Unit details</Header>
        <TextField label="Model count" value={warscroll?.modelCount} />
        <TextField label="Points" value={warscroll?.points} />
        <Header>Ranged Weapons</Header>
        {warscroll?.rangedWeapons?.map((rangedWeapon) => {
          return <EditRangedWeapon rangedWeapon={rangedWeapon} />;
        })}
        <PageContent>
          <span
            onClick={() =>
              setWarscroll(
                warscroll
                  ? {
                      ...warscroll,
                      rangedWeapons: [...(warscroll.rangedWeapons || []), {}],
                    }
                  : undefined,
              )
            }
          >
            Add ranged weapon <AddCircleOutlineIcon />
          </span>
        </PageContent>
        <Header>Melee Weapons</Header>
        {warscroll?.meleeWeapons?.map((meleeWeapon) => {
          return <EditMeleeWeapon meleeWeapon={meleeWeapon} />;
        })}
        <PageContent>
          <span
            onClick={() =>
              setWarscroll(
                warscroll
                  ? {
                      ...warscroll,
                      meleeWeapons: [...(warscroll.meleeWeapons || []), {}],
                    }
                  : undefined,
              )
            }
          >
            Add melee weapon <AddCircleOutlineIcon />
          </span>
        </PageContent>
        <Header>Abilities</Header>
        {warscroll?.abilities.map((ability) => {
          return (
            <EditAbility ability={ability} onChange={handleAbilityChange} />
          );
        })}
        <PageContent>
          <span
            onClick={() =>
              setWarscroll(
                warscroll
                  ? {
                      ...warscroll,
                      abilities: [...(warscroll.abilities || []), {}],
                    }
                  : undefined,
              )
            }
          >
            Add ability <AddCircleOutlineIcon />
          </span>
        </PageContent>
        <Header>Keywords</Header>
        {/* TODO - this does not populate */}
        <AutoComplete
          options={warscroll?.keywords}
          value={warscroll?.keywords}
        />
      </Box>
    </Page>
  );
};

export default EditWarscroll;
