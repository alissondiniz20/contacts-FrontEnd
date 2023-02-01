import Button from "@mui/material/Button/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";

import styles from "./NewContact.module.css";

export function NewContact() {
  function handleCreateNewContact() {
    console.log("Envio de contato!");
  }

  function handleCallSubmit() {
    return handleCreateNewContact();
  }

  return (
    <>
      <h1>New Contact</h1>
      <form onSubmit={handleCreateNewContact}>
        <div>
          <TextField
            id="outlined-basic-name"
            label="First Name"
            variant="filled"
            type="text"
            size="small"
          />

          <TextField
            id="outlined-basic-name"
            label="Last Name"
            variant="filled"
            type="text"
            autoComplete="current-password"
            size="small"
          />
          <br />
          <TextField
            id="outlined-phone-number"
            label="Phone Number"
            variant="filled"
            size="small"
          />
          <br />
          <TextField
            id="outlined-address"
            label="Address"
            variant="filled"
            size="small"
          />
          <br />
          <TextField
            id="outlined-email"
            label="Email"
            variant="filled"
            size="small"
          />
          <Button
            onClick={handleCallSubmit}
            variant="contained"
            endIcon={<SaveIcon />}
          >
            Create
          </Button>
        </div>
      </form>
    </>
  );
}
