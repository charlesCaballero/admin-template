import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

type ConfirmationType = "success" | "warning" | "error" | "information";

interface ConfirmationDialogProps {
    variant: ConfirmationType,
    onClose: (conf: boolean) => void,
    label: string;
}



export default function ConfirmationDialog (props: ConfirmationDialogProps) {
    const {variant, onClose, label} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (conf:boolean) => {
        setOpen(false);
        onClose(conf);
    };

    return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog
        open={open}
        onClose={()=>handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={()=>handleClose(false)}>Disagree</Button>
          <Button variant="contained" onClick={()=>handleClose(true)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}