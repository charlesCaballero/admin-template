import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from "@mdi/js";
import Box from "@mui/material/Box";
import { AppDialog } from "../custom/AppDialog";
import { DialogProps } from "@/_config/interfaces";

export default function ConfirmationDialog(props: DialogProps) {
  const { variant = "warning", onClose, label } = props;

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const iconColor =
    variant === "warning"
      ? theme.palette.warning.main
      : variant === "success"
      ? theme.palette.success.main
      : variant === "error"
      ? theme.palette.error.main
      : variant === "info"
      ? theme.palette.info.main
      : theme.palette.primary.main;

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
        <Box textAlign={"center"}>
          <Icon path={mdiAlertCircleOutline} size={4} color={iconColor} />
        </Box>
        <DialogTitle id="alert-dialog-title" className="confirmation-dialog">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You won&apos;t be able to revert this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => handleClose(true)}
            autoFocus
          >
            Confirm
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
