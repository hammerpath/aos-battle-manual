import { useState } from "react";
import TextField from "../../../../components/TextField";
import PageContent from "../../../../components/PageContent";

export interface MeleeWeapon {
  name?: string;
  attacks?: string;
  toHit?: string;
  toWound?: string;
  rend?: string;
  damage?: string;
}

export interface EditMeleeWeaponProps {
  meleeWeapon: MeleeWeapon;
}

const EditMeleeWeapon: React.FC<EditMeleeWeaponProps> = function ({
  meleeWeapon,
}) {
  const [name, setName] = useState<string>(meleeWeapon.name ?? "");
  const [attacks, setAttacks] = useState<string>(meleeWeapon.attacks ?? "");
  const [toHit, setToHit] = useState<string>(meleeWeapon.toHit ?? "");
  const [toWound, setToWound] = useState<string>(meleeWeapon.toWound ?? "");
  const [rend, setRend] = useState<string>(meleeWeapon.rend ?? "");
  const [damage, setDamage] = useState<string>(meleeWeapon.damage ?? "");

  return (
    <>
      <PageContent>
        <TextField
          label="Name"
          defaultValue={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Attacks"
          defaultValue={attacks}
          onChange={(event) => setAttacks(event.target.value)}
        />
        <TextField
          label="To hit"
          defaultValue={toHit}
          onChange={(event) => setToHit(event.target.value)}
        />
        <TextField
          label="To wound"
          defaultValue={toWound}
          onChange={(event) => setToWound(event.target.value)}
        />
        <TextField
          label="Rend"
          defaultValue={rend}
          onChange={(event) => setRend(event.target.value)}
        />
        <TextField
          label="Damage"
          defaultValue={damage}
          onChange={(event) => setDamage(event.target.value)}
        />
      </PageContent>
    </>
  );
};

export default EditMeleeWeapon;
