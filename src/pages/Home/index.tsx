import { Box } from "@mui/material";
import { CabecalhoHome } from "../../components/CabecalhoHome";
import { MenuLateral } from "../../components/MenuLateral";
import { ModalHome } from "../../components/ModalHome";

export function Home() {
  return (
    <>
      <Box
        maxWidth="100%"
        maxHeight="100%"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="row"
        sx={{
          backgroundColor: "#FFFFFF",
          // width: "100%",
          height: 550,
          color: "#000000",
        }}
      >
        {/* TESTE BOX PAI */}
        <MenuLateral />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            display="flex"
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
          <Box
            sx={{
              display: "flex",
              height: "100%",
              backgroundColor: "#f5f5f5",
            }}
          >
            <ModalHome />
          </Box>
        </Box>
      </Box>
    </>
  );
}
