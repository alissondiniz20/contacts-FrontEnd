import { Button, TextField, Box } from "@mui/material/";
import { useNavigate } from "react-router-dom";

export function Login() {
  let navigate = useNavigate();

  function loginNavigate() {
    navigate("/contatos");
  }

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
          id="email"
          label="E-mail"
          variant="outlined"
          size="small"
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
          type="password"
          id="senha"
          label="Senha"
          variant="outlined"
          size="small"
        />
        <Button
          onClick={loginNavigate}
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
        <Button
          href="esqueci-minha-senha"
          variant="text"
          size="small"
          sx={{
            color: "#131047",
          }}
          // color="secondary"
        >
          Esqueci minha senha
        </Button>
      </Box>
    </>
  );
}
