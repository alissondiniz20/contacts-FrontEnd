import { Box } from "@mui/material";
import { Login } from "./Login";

export function Autenticacao() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "5rem auto",
          height: "calc(100vh - 10rem)",
          position: "fixed",
          mt: 10,
        }}
      >
        <Login />
      </Box>
    </>
  );
}
