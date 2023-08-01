import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

export const LoginContentWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: "100vh",
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(5),
  backgroundImage: "url(/images/background4.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  component: "main",
}));
