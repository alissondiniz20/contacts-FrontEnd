import { Box } from "@mui/material";
import { Modal } from "./Modal";

export function Autenticacao() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "#29292E",
          height: 550,
        }}
      >
        <Modal />
      </Box>
    </>
  );
}
