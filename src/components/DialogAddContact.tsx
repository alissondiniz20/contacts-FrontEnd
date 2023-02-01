import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";

import React from "react";

export function DialogAdd() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Contact
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        maxWidth="sm"
      >
        <DialogTitle id="dialog-title">New Contact</DialogTitle>
        <DialogContent
          sx={{ "& .MuiTextField-root": { m: 1 } }}
          id="dialog-description"
        >
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="phone-number"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            autoFocus
            margin="dense"
            id="birthDate"
            label="Birth Date"
            type="date"
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            type="email"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="outlined" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
