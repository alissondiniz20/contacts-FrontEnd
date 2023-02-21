import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "@mkyy/mui-search-bar";

import { Botao } from "./Botao";

export function SearchContato() {
  const [textFieldValue, setTextFieldValue] = useState("");

  function resetSearch() {
    setTextFieldValue("");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderTopLeftRadius: "8vh",
        borderTopRightRadius: "8vh",
      }}
    >
      <Box
        sx={{
          height: 50,
          pl: "3vh",
          pr: "3vh",
          gap: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          boxShadow: 1,
        }}
      >
        <SearchBar
          // value={textFieldValue}
          // onChange={(e) => setTextFieldValue(e)}
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "space-between !important ",
          //   alignItems: "center",
          //   boxShadow: 3,
          // }}
          width="80%"
        />
        <Botao />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          pt: "3vh",
          pl: "4.5vh",
          pr: "3vh",
          pb: "2vh",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
          }}
        >
          Nome
        </Typography>

        <Typography
          style={{
            fontWeight: 600,
          }}
        >
          Telefone
        </Typography>
      </Box>
    </Box>
  );
}
