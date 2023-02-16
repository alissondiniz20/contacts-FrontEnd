import { Button, TextField, Box, InputAdornment } from "@mui/material/";

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
          variant="contained"
          size="small"
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#2c2966" /*"#8A2BE2"*/,
            ":hover": {
              backgroundColor: "#131047" /*"#720cd1"*/,
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
