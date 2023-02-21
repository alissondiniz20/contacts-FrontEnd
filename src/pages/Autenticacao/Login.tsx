import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, TextField, Box, Alert } from "@mui/material/";

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
    if (user === "" || user === undefined) {
      setUserInvalido(true);
      console.log("user inválido!");

      return <Alert severity="error">Usuário ou senha inválidos!</Alert>;
    } else if (senha === "" || senha === undefined) {
      setSenhaInvalida(true);

      console.log("senha inválida!");
      return <Alert severity="error">Usuário ou senha inválidos!</Alert>;
    }
    //  else {
    //   user === "contato" && senha === "123456";
    // }

    return loginNavigate();
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          padding: 5,
          backgroundColor: "#FFFAFA",
          width: /*350*/ "50vh",
          height: /*350*/ "50vh",
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
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
          }}
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
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
