import { Box } from "@mui/material";
import { Modal } from "./Modal";

export function Autenticacao() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#29292E" /**excluir */,
          width: "5rem auto",
          height: "calc(100vh - 10rem)",
          // height: 550,
          position: "fixed",
          mt: 10,
        }}
      >
        <Modal />
      </Box>
    </>
  );
}
