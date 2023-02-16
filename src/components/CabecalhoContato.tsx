import { Box } from "@mui/material";

export function CabecalhoContato() {
  return (
    <Box
      // display="flex"
      flexDirection="column"
      gap={1}
      sx={{
        backgroundColor: "#2c2966",
        padding: 5,
        color: "white",
        width: "100%",
      }}
    >
      <h1>Contatos</h1>
    </Box>
  );
}
