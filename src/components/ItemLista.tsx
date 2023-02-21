import { Box, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

export function ItemLista() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
          mb: 1,
          borderRadius: 1,
          // boxShadow: 1,
        }}
      >
        <Box sx={{ pl: 1 }}>Fulano de Tal de Oliveira</Box>
        <Box sx={{ pl: 11 }}>(81) 99999-9999</Box>
        <Box sx={{ flex: 1, pr: 1 }}>
          <Button startIcon={<Delete />} variant="outlined" color="error">
            Excluir
          </Button>
        </Box>
      </Box>
    </>
  );
}
