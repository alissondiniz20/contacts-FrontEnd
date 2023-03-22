import { Add } from "@mui/icons-material";
import { Grid, Button, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { api } from "../../lib/axios";

export function Cadastro() {
  const location = useLocation();

  console.log(location.state);

  const navigate = useNavigate();

  function handleBackNavigate() {
    navigate(-1);
  }

  function handleBackContacts() {
    navigate("/contatos");
  }

  const novaSchemaValidacaoForm = zod.object({
    nome: zod.string().min(1, "Preencha o campo Nome"),
    sobrenome: zod.string().min(1, "Preencha o campo Sobrenome"),
    telefone: zod.string().min(1, "Preencha o campo Telefone"),
    datanasci: zod.string().min(1, "Preencha o campo Data de Nascimento"),
    endereco: zod.string().min(1, "Preencha o campo Endereco"),
    email: zod.string().email().min(1, "Preencha o cmapo Email"),
  });

  type NewCycleFormData = zod.infer<typeof novaSchemaValidacaoForm>;

  const { register, handleSubmit, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(novaSchemaValidacaoForm),
    defaultValues: {
      nome: location?.state?.nome ?? "",
      sobrenome: location?.state?.sobrenome ?? "",
      telefone: location?.state?.telefone ?? "",
      datanasci: location?.state?.datanasci ?? "",
      endereco: location?.state?.endereco ?? "",
      email: location?.state?.email ?? "",
    },
  });

  async function createNewContact(data: NewCycleFormData) {
    try {
      await api.post("/contatos", data).then(() => {
        alert("Contato Criado!");
        handleBackContacts();
      });
    } catch (error) {
      alert("Algo deu errado! Contato não foi criado.");
      console.log(error);
    }

    reset();
  }

  async function updateContact(data: NewCycleFormData) {
    try {
      await api.put(`/contatos/${location.state.id}`, data).then(() => {
        alert("Contato atualizado!");
        handleBackContacts();
      });
    } catch (error) {
      alert("Algo deu errado! Contato não atualizado.");
      console.log(error);
    }

    reset();
  }

  function handleSaveOrUpdate(data: any) {
    if (!location?.state?.id) {
      createNewContact(data);
    } else {
      updateContact(data);
    }
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 2,
        p: 2,
      }}
    >
      <Grid item xs={12}>
        <TextField
          label="Nome"
          variant="outlined"
          required
          size="small"
          {...register("nome")}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
            mb: 1,
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Sobrenome"
          variant="outlined"
          required
          size="small"
          {...register("sobrenome")}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
            mb: 1,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Telefone"
          variant="outlined"
          required
          size="small"
          {...register("telefone")}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
            mb: 1,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Data de Nascimento"
          variant="outlined"
          required
          size="small"
          {...register("datanasci" /*, { valueAsDate: true }*/)}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
            mb: 1,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Endereço"
          variant="outlined"
          required
          size="small"
          {...register("endereco")}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
            mb: 1,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          required
          size="small"
          {...register("email")}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiInputLabel-root": { color: "#2c2966" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#2c2966",
              },
            },
            mb: 1,
          }}
        />
      </Grid>

      <Grid container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Grid item xs={1}>
          <Button
            onClick={handleBackNavigate}
            variant="contained"
            color="error"
            sx={{
              width: "5vw",
            }}
          >
            Cancelar
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={handleSubmit(handleSaveOrUpdate)}
            variant="contained"
            startIcon={<Add />}
            sx={{
              backgroundColor: "#FFA051",
              "&:disabled": {
                cursor: "not-allowed",
                opacity: 0.6,
              },
              "&:hover": {
                backgroundColor: "#fe790b",
              },
              mr: 3,
            }}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
