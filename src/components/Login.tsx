import styles from "./Login.module.css";

import Box from "@mui/material/Box";

export function Login() {
  return (
    <Box
      className="box"
      sx={{
        width: 350,
        height: 350,
        backgroundColor: "",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    ></Box>
  );
}
