import { styled } from "@mui/material/styles";
import Link, { LinkProps } from "next/link";
import { ElementType } from "react";

export const MenuNavLink = styled(Link)<
  LinkProps & {
    component?: ElementType;
    target?: "_blank" | undefined;
  }
>(({ theme }) => ({
  width: "100%",
  display: "flex",
  textDecoration: "none",
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: "opacity .25s ease-in-out",
  "&.active, &.active:hover": {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
  },
  "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
    color: `${theme.palette.common.white} !important`,
  },
}));