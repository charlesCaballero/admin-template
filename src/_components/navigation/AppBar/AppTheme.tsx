import { Box, IconButton } from "@mui/material";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@/_config/context";

export default function AppTheme() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={colorMode.toggleColorMode} sx={{ p: 1 }}>
        <NightsStayOutlinedIcon
          sx={{
            fontSize: 30,
            ...(theme.palette.mode === "light" && { display: "none" }),
          }}
        />
        <LightModeOutlinedIcon
          sx={{
            fontSize: 30,
            ...(theme.palette.mode === "dark" && { display: "none" }),
          }}
        />
      </IconButton>
    </Box>
  );
}
