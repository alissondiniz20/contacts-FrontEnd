import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

export function BarraPesquisa() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{
        width: "100%",
        height: 50,
        ml: 4,
        mr: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
        alignItems="center"
      >
        <SearchIcon
          sx={
            {
              // color: "#ffa051",
            }
          }
        />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          p: 0.5,
        }}
      >
        Barra
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          // p: 0.5,
          color: "#ffa051",
        }}
      >
        Botão
      </Box>
      <Box>
        <RefreshIcon />
      </Box>
    </Box>
  );
}
