import { Box, IconButton } from "@mui/material";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@/_config/context";

export default function AppTheme() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        color="inherit"
        onClick={colorMode.toggleColorMode}
        sx={{ p: 1 }}
      >
        {theme.palette.mode === "light" ? (
          <Icon path={mdiWeatherNight} size={1} />
        ) : (
          <Icon path={mdiWeatherSunny} size={1} />
        )}
      </IconButton>
    </Box>
  );
}
