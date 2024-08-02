import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEditSpellMutation, useGetSpellByIdQuery } from "../spellService";
import Loader from "../../../loader/Loader";
import { useEffect, useState } from "react";

export interface SpellEditProps {}

type SpellEditParams = {
  spellId: string;
};

const SpellEdit: React.FC<SpellEditProps> = function () {
  const { spellId } = useParams() as SpellEditParams;
  const navigate = useNavigate();
  const { data: spell, isLoading } = useGetSpellByIdQuery(spellId);
  const [editSpell, { isLoading: isEditLoading, isSuccess: isEditSuccess }] =
    useEditSpellMutation();
  const [name, setName] = useState<string>(spell?.name ?? "");
  const [declare, setDeclare] = useState<string>(spell?.declare ?? "");
  const [effect, setEffect] = useState<string>(spell?.effect ?? "");
  const [value, setValue] = useState<string>(spell?.value.toString() ?? "");

  useEffect(() => {
    if (isEditSuccess) {
      navigate(-1);
    }
  }, [isEditSuccess, navigate]);

  if (isLoading || isEditLoading) {
    return <Loader />;
  }

  if (!spell) {
    return <div>Spell not found</div>;
  }

  return (
    <Box
      component="form"
      onSubmit={() =>
        editSpell({
          id: spellId,
          name,
          declare,
          effect,
          value: +value,
        })
      }
    >
      <div className="flex flex-1 flex-col space-y-4">
        <TextField
          label="Name"
          defaultValue={spell.name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          multiline
          minRows={3}
          label="Declare"
          defaultValue={spell.declare}
          onChange={(event) => setDeclare(event.target.value)}
        />
        <TextField
          multiline
          minRows={3}
          label="Effect"
          defaultValue={spell.effect}
          onChange={(event) => setEffect(event.target.value)}
        />
        <TextField
          type="number"
          label="Value"
          defaultValue={spell.value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button type="submit">Save</Button>
      </div>
    </Box>
  );
};

export default SpellEdit;
