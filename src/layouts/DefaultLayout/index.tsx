import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Box, Container } from "@mui/material";

export function DefaultLayout() {
  return (
    <Box
      alignContent="center"
      justifyContent="center"
      sx={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
}
