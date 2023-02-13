import Button from "@mui/material/Button";

export function Botao() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          // mt: 1,
          backgroundColor: "#FFA051",
          "&:hover": {
            backgroundColor: "#fe790b",
          },
          width: 100,
        }}
      >
        Adicionar
      </Button>
    </>
  );
}
