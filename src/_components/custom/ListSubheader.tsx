
import { styled } from "@mui/material/styles";
import MuiListSubheader, {
    ListSubheaderProps,
  } from "@mui/material/ListSubheader";

export const ListSubheader = styled((props: ListSubheaderProps) => (
    <MuiListSubheader component="li" {...props} />
  ))(({ theme }) => ({
    lineHeight: 1,
    display: "flex",
    position: "relative",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    backgroundColor: "transparent",
    transition: "padding-left .25s ease-in-out",
  }));