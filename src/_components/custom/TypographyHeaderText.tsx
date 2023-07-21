import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";


export const TypographyHeaderText = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
      fontSize: "0.75rem",
      lineHeight: "normal",
      letterSpacing: "0.21px",
      textTransform: "uppercase",
      color: theme.palette.text.disabled,
      fontWeight: theme.typography.fontWeightMedium,
    })
  );