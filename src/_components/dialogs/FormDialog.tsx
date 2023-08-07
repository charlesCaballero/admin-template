import Button from "@mui/material/Button";
import { AppDialog } from "../custom/AppDialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import IconButton from "@mui/material/IconButton";
import { DialogProps } from "@/_config/interfaces";
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import LoginForm from "../forms/LoginForm";

interface FormDialogProps extends DialogProps {
  title: string;
  context?: string;
}

export default function FormDialog(props: FormDialogProps) {
  const { onClose, label, title, context } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (conf: boolean) => {
    setOpen(false);
    onClose(conf);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {label}
      </Button>
      <AppDialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          aria-label="close"
          onClick={() => handleClose(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Icon path={mdiClose} size={1} />
        </IconButton>
        <DialogTitle id="alert-dialog-title" className="form-dialog">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {context}
          </DialogContentText>
          <LoginForm />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => handleClose(true)}
            autoFocus
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color={"tertiary"}
            onClick={() => handleClose(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </AppDialog>
    </div>
  );
}
