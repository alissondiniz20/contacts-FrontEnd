import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { DialogAdd } from "./DialogAddContact";

import styles from "./Contato.module.css";

const contatos = [0, 1, 2];

export function Contato() {
  const [checked, setChecked] = React.useState([1]);

  function handleContact() {
    console.log("oi");
  }

  function handleOpenDialog() {
    console.log("oi dialog");
  }

  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {contatos.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} disablePadding>
            <ListItemButton onClick={handleContact}>
              <ListItemAvatar>
                <Avatar>
                  <img
                    src="/src/assets/imgperfil.svg"
                    alt="Imagem do contato"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <br />
      <div className={styles.add}>
        <DialogAdd />
      </div>
    </List>
  );
}
