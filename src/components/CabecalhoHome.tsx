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
        // backgroundColor: "white",
        // borderTopLeftRadius: "8vh",
        // borderTopRightRadius: "8vh",
      }}
    >
      <Box
        sx={{
          height: 50,
          pl: "2vh",
          pr: "2vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          boxShadow: 1,
          pl: 2,
          pr: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: 1,
            pt: 2,
            pb: 2,
            borderTopLeftRadius: 2,
          }}
        >
          <Typography
            style={{
              fontWeight: 600,
            }}
            sx={{
              pl: 2,
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
    </Box>
  );
}
