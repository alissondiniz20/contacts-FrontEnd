import { Box, Button, TextField } from "@mui/material";
import { Botao } from "./Botao";

export function Cadastro() {
  return (
    <>
      <Box
        sx={{
          p: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              id="nome"
              label="Nome*"
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                "& .MuiInputLabel-root": { color: "#2c2966" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2c2966",
                  },
                },
              }}
            />
            <TextField
              id="sobrenome"
              label="Sobrenome*"
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                "& .MuiInputLabel-root": { color: "#2c2966" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2c2966",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              id="telefone"
              label="Telefone*"
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                "& .MuiInputLabel-root": { color: "#2c2966" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2c2966",
                  },
                },
              }}
            />
            <TextField
              id="datanasci"
              label="Data de Nascimento*"
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                "& .MuiInputLabel-root": { color: "#2c2966" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2c2966",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              id="endereço"
              label="Endereço*"
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                "& .MuiInputLabel-root": { color: "#2c2966" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2c2966",
                  },
                },
              }}
            />
            <TextField
              id="email"
              label="Email*"
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                "& .MuiInputLabel-root": { color: "#2c2966" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#2c2966",
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 1,
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "10vh",
            }}
          >
            Voltar
          </Button>
          <Botao />
        </Box>
      </Box>
    </>
  );
}
