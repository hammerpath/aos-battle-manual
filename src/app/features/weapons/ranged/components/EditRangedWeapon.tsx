import { useState } from "react";
import TextField from "../../../../components/TextField";
import PageContent from "../../../../components/PageContent";

export interface RangedWeapon {
  name?: string;
  range?: string;
  attacks?: string;
  toHit?: string;
  toWound?: string;
  rend?: string;
  damage?: string;
}

export interface EditRangedWeaponProps {
  rangedWeapon: RangedWeapon;
}

const EditRangedWeapon: React.FC<EditRangedWeaponProps> = function ({
  rangedWeapon,
}) {
  const [name, setName] = useState<string>(rangedWeapon.name ?? "");
  const [range, setRange] = useState<string>(rangedWeapon.range ?? "");
  const [attacks, setAttacks] = useState<string>(rangedWeapon.attacks ?? "");
  const [toHit, setToHit] = useState<string>(rangedWeapon.toHit ?? "");
  const [toWound, setToWound] = useState<string>(rangedWeapon.toWound ?? "");
  const [rend, setRend] = useState<string>(rangedWeapon.rend ?? "");
  const [damage, setDamage] = useState<string>(rangedWeapon.damage ?? "");

  return (
    <PageContent>
      <TextField
        label="Name"
        defaultValue={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Range"
        defaultValue={range}
        onChange={(event) => setRange(event.target.value)}
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
  );
};

export default EditRangedWeapon;
