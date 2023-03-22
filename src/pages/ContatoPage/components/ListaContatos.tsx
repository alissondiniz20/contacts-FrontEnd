import SearchBar from "@mkyy/mui-search-bar";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../lib/axios";
import { RowContact } from "./RowContact";

export interface Contato {
  id: number;
  nome: string;
  sobrenome: string;
}

interface InputFormContact {
  id: number;
  nome: string;
  sobrenome: string;
  telefone: string;
  datanasci: string;
  endereco: string;
  email: string;
}

export interface ContatosAction {
  contato: Contato[];
  listarContatos: () => Promise<void>;
  createContato: (data: InputFormContact) => Promise<void>;
}

export function ListaContatos() {
  const [searchValue, setSearchValue] = useState("");
  const [contato, setContato] = useState<Contato[]>([]);
  const [contatosFilter, setContatosFilter] = useState(contato);

  const navigate = useNavigate();

  function handleNavigateNewForm() {
    navigate("/cadastro");
  }

  async function listarContatos() {
    try {
      await api.get("/contatos").then((response) => {
        setContato(response.data);
        setContatosFilter(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    listarContatos();
  }, []);

  function handleSearch(valueToFilter: string) {
    const filtro = contato.filter((contato: Contato) => {
      return contato.nome.toLowerCase().includes(valueToFilter);
    });

    setContatosFilter(filtro);

    console.log(filtro);
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          pl: 2,
          pr: 2,
          pt: 1,
        }}
      >
        <Grid item xs={9} boxShadow={1} borderRadius={1}>
          <SearchBar
            width="100%"
            placeholder="Pesquise um contato"
            value={searchValue}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={1} pt={1} pb={1}>
          <Button
            onClick={handleNavigateNewForm}
            variant="contained"
            sx={{
              backgroundColor: "#FFA051",
              "&:hover": {
                backgroundColor: "#fe790b",
              },
            }}
          >
            Cadastrar
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              boxShadow: 1,
              pt: 2,
              pb: 2,
              borderTopLeftRadius: 2,
            }}
          >
            <Typography
              style={{
                fontWeight: 600,
              }}
              sx={{
                pl: 2,
              }}
            >
              Nome
            </Typography>

            <Typography
              style={{
                fontWeight: 600,
              }}
              sx={{ display: "flex", justifyContent: "center", pl: 17 }}
            >
              Telefone
            </Typography>

            <Typography
              style={{
                fontWeight: 600,
              }}
              sx={{ display: "flex", justifyContent: "flex-end", pr: 12.5 }}
            >
              Ações
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            boxShadow: 1,
            pl: 2,
            pr: 2,
            pb: 2,
          }}
        >
          <Box
            sx={{
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
              boxShadow: 1,
            }}
          >
            {contatosFilter.map((contato, index) => {
              return (
                <RowContact
                  contato={contato}
                  setContato={setContato}
                  listarContatos={listarContatos}
                  key={index}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
