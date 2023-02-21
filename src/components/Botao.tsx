import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Botao() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/cadastrar-contatos");
  }

  return (
    <>
      <Button
        onClick={handleNavigate}
        variant="contained"
        startIcon={<Add />}
        sx={{
          backgroundColor: "#FFA051",
          "&:hover": {
            backgroundColor: "#fe790b",
          },
          width: "18vh",
        }}
      >
        Adicionar
      </Button>
    </>
  );
}
