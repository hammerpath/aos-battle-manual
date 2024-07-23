import FormControl from "@mui/material/FormControl";
import TextField from "../../../../components/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Header from "../../../../components/Header";
import { useState } from "react";
import PageContent from "../../../../components/PageContent";
import AutoComplete from "../../../../components/AutoComplete";

export interface Ability {
  name?: string;
  playerTurn?: string;
  phase?: string;
  declare?: string;
  effect?: string;
  keywords?: string[];
}

export interface EditAbilityProps {
  ability: Ability;
  onChange?: (ability: Ability) => void;
}

const EditAbility: React.FC<EditAbilityProps> = function ({
  ability,
  onChange,
}) {
  const [name, setName] = useState<string>(ability.name ?? "");
  const [playerTurn, setPlayerTurn] = useState<string>(
    ability.playerTurn ?? "",
  );
  const [phase, setPhase] = useState<string>(ability.phase ?? "");
  const [declare, setDeclare] = useState<string>(ability.declare ?? "");
  const [effect, setEffect] = useState<string>(ability.effect ?? "");
  const [keywords, setKeywords] = useState<string[]>(ability.keywords ?? []);

  const getState = (): Ability => {
    return {
      name,
      playerTurn,
      phase,
      declare,
      effect,
      keywords,
    };
  };

  const handlePlayerTurnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlayerTurn((event.target as HTMLInputElement).value);
    onChange?.(getState());
  };

  const handlePhaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhase((event.target as HTMLInputElement).value);
    onChange?.(getState());
  };

  return (
    <>
      <TextField
        defaultValue={name}
        label="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <PageContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Player turn</FormLabel>
          <RadioGroup row onChange={handlePlayerTurnChange}>
            <FormControlLabel value="Any" control={<Radio />} label="Any" />
            <FormControlLabel value="Your" control={<Radio />} label="Your" />
            <FormControlLabel
              value="Opponent"
              control={<Radio />}
              label="Opponent"
            />
          </RadioGroup>
        </FormControl>
      </PageContent>
      <PageContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Phase</FormLabel>
          <RadioGroup row onChange={handlePhaseChange}>
            <FormControlLabel value="Hero" control={<Radio />} label="Hero" />
            <FormControlLabel
              value="Movement"
              control={<Radio />}
              label="Movement"
            />
            <FormControlLabel
              value="Charge"
              control={<Radio />}
              label="Charge"
            />
          </RadioGroup>
        </FormControl>
      </PageContent>
      <TextField
        defaultValue={declare}
        label="Declare"
        onChange={(event) => setDeclare(event.target.value)}
      />
      <TextField
        defaultValue={effect}
        label="Effect"
        onChange={(event) => setEffect(event.target.value)}
      />

      <AutoComplete label="Keywords" onChange={(value) => setKeywords(value)} />
      <Header>Preview</Header>
      <PageContent>
        <div className="w-96 rounded-lg border border-black">
          <div className="bg-black p-4 text-white">
            {playerTurn ?? ""} {phase ?? ""}{" "}
            {playerTurn || phase ? "Phase" : ""}
          </div>
          <div className="border p-4">{name}</div>
          <div className="p-4">
            <div>
              <b>{declare ? "Declare: " : ""}</b>
              {declare}
            </div>
            <div>
              <b>{effect ? "Effect: " : ""}</b>
              {effect}
            </div>
            <div className="pt-4">
              <b>{keywords.length > 0 ? "Keywords: " : ""}</b>
              {keywords.map((keyword, index) =>
                index === keywords.length - 1 ? keyword : `${keyword}, `,
              )}
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default EditAbility;
