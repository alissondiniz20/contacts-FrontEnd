import { Button, TextField } from "@mui/material/";
import { Box } from "@mui/material";

export function Login() {
  return (
    <>
      <Box
        gap={1.5}
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: 8,
          backgroundColor: "#FFFAFA",
          width: 350,
          height: 350,
        }}
        border={1}
        borderRadius={1}
        borderColor="#581c87"
      >
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
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
          justify-content=""
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
