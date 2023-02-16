import { Box } from "@mui/material";
import { CabecalhoContato } from "../../components/CabecalhoContato";
import { ModalHome } from "../../components/ModalHome";

export function ContatoPage() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          color: "#000000",
        }}
      >
        <Box
          sx={{
            // display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <CabecalhoContato />
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#f5f5f5",
              height: "100vh",
            }}
          >
            <ModalHome />
          </Box>
        </Box>
      </Box>
    </>
  );
}
