import { Box } from "@mui/material";
import { CabecalhoContato } from "../../components/CabecalhoContato";
import { Cadastro } from "../../components/Cadastro";
import { ContatoPage } from "../ContatoPage";

export function CadastrarContato() {
  return (
    <Box>
      <CabecalhoContato />
      <Box
        sx={{
          display: "flex",
          justifyContent: "stretch",
          alignItems: "start",
          flexDirection: "column",
          p: 5,
          backgroundColor: "#e5e7eb",
          height: "100vh",
        }}
      >
        <Cadastro />
      </Box>
    </Box>
  );
}
