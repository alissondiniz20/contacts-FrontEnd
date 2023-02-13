import { Box } from "@mui/material";
import { CabecalhoHome } from "./CabecalhoHome";
import { ListaHome } from "./ListaHome";

export function ModalHome() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "stretch",
        alignItems: "start",
        flexDirection: "column",
        p: 5,
        backgroundColor: "#e5e7eb",
      }}
    >
      <CabecalhoHome />
      <ListaHome />
    </Box>
  );
}
