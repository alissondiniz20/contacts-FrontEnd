import { Box } from "@mui/material";
import { Login } from "./Login";

export function Modal() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: "#2c2966" /*"#8A2BE2"*/,
          width: 500,
          height: 550,
        }}
      ></Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#FFFAFA",
          width: 810,
          height: 550,
        }}
      >
        <Login />
      </Box>
    </>
  );
}
