import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const AppDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    padding: theme.spacing(5),
    minWidth: theme.spacing(65),
  },
  "& .MuiDialogTitle-root.confirmation-dialog": {
    textAlign: "center",
    fontSize: 32,
    color: theme.palette.text.secondary,
    letterSpacing: theme.spacing(0.1),
    fontWeight: 600,
  },
  "& .MuiDialogTitle-root.form-dialog": {
    textAlign: "center",
    fontSize: 25,
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  "& .MuiDialogContentText-root": {
    textAlign: "center",
    color: theme.palette.text.primary,
    paddingBottom: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    justifyContent: "center",
  },
}));
