import { Button, TextField, Box, InputAdornment } from "@mui/material/";
import { LockKey, EnvelopeSimple } from "phosphor-react";

export function Login() {
  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          padding: 5,
          backgroundColor: "#FFFAFA",
          width: 350,
          height: 350,
        }}
        gap={1.5}
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={1}
        borderColor="#581c87"
      >
        <TextField
          sx={{
            borderColor: "#8A2BE2",
          }}
          id="email"
          label="E-mail"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EnvelopeSimple />
              </InputAdornment>
            ),
          }}
          sx={{
            borderColor: "#8A2BE2",
          }}
          type="password"
          id="senha"
          label="Senha"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#8A2BE2",
            ":hover": {
              backgroundColor: "#720cd1",
            },
          }}
        >
          Acessar
        </Button>
        <Button
          href="esqueci-minha-senha"
          variant="text"
          size="small"
          color="secondary"
        >
          Esqueci minha senha
        </Button>
      </Box>
    </>
  );
}
