import { useState } from "react";
import { Box } from "@mui/material";

import SearchBar from "@mkyy/mui-search-bar";

export function CabecalhoHome() {
  const [textFieldValue, setTextFieldValue] = useState("");

  // const handleSearch = (labelOptionValue) => {
  //   console.log(labelOptionValue);
  // };

  function resetSearch() {
    setTextFieldValue("");
  }

  return (
    <Box
      sx={{
        height: 50,
        pl: 3,
        pr: 3,
        gap: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "100%",
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        boxShadow: 1,
      }}
    >
      <SearchBar
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e)}
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        // }}
        width="80%"
      />
      Botão
    </Box>
  );
}
