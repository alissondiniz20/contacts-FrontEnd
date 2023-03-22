import { Button, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { api } from "../../../lib/axios";
import { useNavigate } from "react-router";

export function RowContact({ contato, listarContatos }: any) {
  const deletarContato = async () => {
    const response = await api.delete(`/contatos/${contato.id}`);

    if (response.status === 200) {
      listarContatos();
    }
  };

  function handleDeletarContato() {
    deletarContato();
  }

  const navigate = useNavigate();

  function handleUpdateContact() {
    // console.log(`Contato ID: ${contato.id}`);

    navigate("/cadastro", { state: contato });
  }

  const sendDataToEditContact = () => {
    handleUpdateContact();
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Grid item xs={6} sx={{ pl: 2 }}>
          <strong>{contato.nome + " " + contato.sobrenome}</strong>
        </Grid>
        <Grid item xs={5} sx={{ pl: 1 }}>
          <strong>{contato.telefone}</strong>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            gap: 1,
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <Button
            onClick={sendDataToEditContact}
            variant="contained"
            color="inherit"
            sx={{ width: "5vw" }}
          >
            Editar
          </Button>
          <Button
            onClick={handleDeletarContato}
            variant="outlined"
            color="error"
            sx={{ width: "4vw" }}
          >
            <Delete />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
