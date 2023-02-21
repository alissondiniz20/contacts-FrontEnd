import { Box } from "@mui/material";

import { SearchContato } from "./CabecalhoHome";
import { ListaContatos } from "./ListaContatos";

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
      <SearchContato />
      <ListaContatos />
    </Box>
  );
}
