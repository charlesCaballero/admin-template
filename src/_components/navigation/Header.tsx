// ** Next Import
import Link from "next/link";
import Image from "next/image";

// ** MUI Imports
import Box, { BoxProps } from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

// ** Configs
import themeConfig from "@/_config/themeConfig";

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: theme.spacing(4.5),
  transition: "padding .25s ease-in-out",
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "uppercase",
  color: theme.palette.text.primary,
  transition: "opacity .25s ease-in-out, margin .25s ease-in-out",
  fontSize: "1.3rem",
  letterSpacing: 1.5,
}));

const StyledLink = styled("div")({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
});

export default function NavHeader() {
  // ** Props

  // ** Hooks
  const theme = useTheme();

  return (
    <MenuHeaderWrapper
      className="nav-header"
      sx={{ pl: 2, pt: theme.spacing(2) }}
    >
      <Link href="/" passHref style={{ textDecoration: "none" }}>
        <StyledLink>
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          <HeaderTitle variant="h6" sx={{ ml: 1, flexGrow: 1 }}>
            {themeConfig.templateName}
          </HeaderTitle>
        </StyledLink>
      </Link>
    </MenuHeaderWrapper>
  );
}
