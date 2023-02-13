import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export function DefaultLayout() {
  return (
    <Box
      alignContent="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        height: "100%",
      }}
    >
      <Outlet />
    </Box>
  );
}
