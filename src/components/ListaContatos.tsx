import { Box } from "@mui/material";
import { ItemLista } from "./ItemLista";

export function ListaContatos() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          boxShadow: 1,
          pl: 2,
          pr: 2,
          pb: 2,
        }}
      >
        <Box
          sx={{
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            boxShadow: 1,
          }}
        >
          <ItemLista />
          <ItemLista />
          <ItemLista />
        </Box>
      </Box>
    </Box>
  );
}
