import themeConfig from "@/_config/themeConfig";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "opacity .25s ease-in-out",
    ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
  });