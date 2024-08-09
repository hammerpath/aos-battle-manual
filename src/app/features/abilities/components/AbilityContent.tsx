import { Ability } from "../types";

interface AbilityProps {
  ability: Ability;
}

const AbilityContent: React.FC<AbilityProps> = function ({ ability }) {
  return (
    <>
      {ability.declare ? (
        <>
          <strong>Declare:</strong> {ability.declare}
        </>
      ) : null}
      <div className="pt-2">
        <strong>Effect:</strong> {ability.effect}
      </div>
    </>
  );
};

export default AbilityContent;
