import { Box } from "@mui/material";

export function ListaContatos() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          backgroundColor: "#ffffff",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          boxShadow: 1,
          gap: 1,
        }}
      >
        LISTA CONTATOS
      </Box>
    </Box>
  );
}
