import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const MainContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  component: "main",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all .25s ease-in-out",
  minHeight: "100vh",
  flexGrow: 1,
  flexDirection: "column",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  position: "relative",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "url(/images/content_background_dark.png)"
      : "url(/images/content_background_light.png)",
  backgroundPosition: "right bottom",
  backgroundSize: "60%",
  backgroundRepeat: "no-repeat",
}));
