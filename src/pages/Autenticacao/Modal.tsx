import { Box } from "@mui/material";
import { Login } from "./Login";

export function Modal() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#2c2966",
          width: 500,
          height: 550,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 810,
          height: 550,
          backgroundColor: "#FFFAFA",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Login />
      </Box>
    </>
  );
}
