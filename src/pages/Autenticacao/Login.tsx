import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextField,
  Box,
  Alert,
  Stack,
  Typography,
  InputAdornment,
} from "@mui/material/";

export function Login() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [userInvalido, setUserInvalido] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);

  const navigate = useNavigate();

  function loginNavigate() {
    navigate("/contatos");
  }

  const Acessar = () => {
    if (user === "usuarioteste" && senha === "123456") {
      if (user === undefined || !user) {
        setUserInvalido(true);

        return (
          <Stack>
            <Alert severity="error">Dados inválidos</Alert>
          </Stack>
        );
      } else if (senha === undefined || !senha) {
        setSenhaInvalida(true);

        return (
          <Stack>
            <Alert severity="error">Dados inválidos</Alert>
          </Stack>
        );
      }

      return loginNavigate();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          borderColor: "#581c87",
          backgroundColor: "#FFFAFA",
          boxShadow: 3,
          padding: 5,
          width: "50vh",
          height: "50vh",
          gap: 1.5,
        }}
        component="form"
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          Acesse seus Contatos
        </Typography>
        <TextField
          sx={{
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
          }}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
          required
          id="email"
          label="E-mail"
          variant="outlined"
          size="small"
          error={userInvalido}
        />
        <TextField
          sx={{
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
          }}
          value={senha}
          type="password"
          onChange={(e) => {
            setSenha(e.target.value);
          }}
          required
          id="senha"
          label="Senha"
          variant="outlined"
          size="small"
          error={senhaInvalida}
        />
        <Button
          onClick={() => {
            Acessar();
          }}
          variant="contained"
          size="small"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#2c2966",
            ":hover": {
              backgroundColor: "#131047",
            },
          }}
        >
          Acessar
        </Button>
        {/* <Button
          href="esqueci-minha-senha"
          variant="text"
          size="small"
          sx={{
            color: "#131047",
          }}
        >
          Esqueci minha senha
        </Button> */}
      </Box>
    </>
  );
}
