import { PaletteMode } from "@mui/material";
import { ThemeColor } from "./customPalette";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import custompalette from "@/_theme/customPalette";
import customtypography from "@/_theme/customTypography";

interface CustomThemeProps {
  children: ReactNode;
  mode: PaletteMode;
  themeColor: ThemeColor;
}

export default function CustomTheme(props: CustomThemeProps) {
  const { children, mode, themeColor } = props;
  const palette = custompalette(mode, themeColor);
  const updatePalette = React.useMemo(
    () =>
      createTheme({
        palette: palette,
      }),
    [mode]
  );

  const typography = customtypography(updatePalette);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: palette,
        typography: typography,
        mixins: {
          toolbar: {
            minHeight: 64,
          },
        },
      }),
    [updatePalette]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
