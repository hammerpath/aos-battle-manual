import { useNavigate, useParams } from "react-router-dom";
import {
  useEditFactionMutation,
  useGetFactionByIdQuery,
} from "../../../faction/factionService";
import { Button, TextField } from "@mui/material";
import PageContent from "../../../../components/PageContent";
import { useEffect, useState } from "react";

const EditFactionComponent: React.FC = function () {
  const { factionId } = useParams<"factionId">();
  const navigate = useNavigate();
  const { data: faction } = useGetFactionByIdQuery(factionId!);
  const [name, setName] = useState(faction?.name);
  const [editFaction, { isSuccess: isEditSuccess }] = useEditFactionMutation();

  useEffect(() => {
    if (isEditSuccess) {
      navigate(-1);
    }

    setName(faction?.name);
  }, [isEditSuccess, navigate, faction]);

  return (
    <>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></TextField>
      <PageContent>
        <Button
          variant="contained"
          onClick={() => name && faction && editFaction({ ...faction, name })}
        >
          Save
        </Button>
      </PageContent>
    </>
  );
};

export default EditFactionComponent;
