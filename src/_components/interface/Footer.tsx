// ** MUI Imports
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function Footer() {
  // ** Hook
  const theme = useTheme();

  return (
    <Box
      component="footer"
      className="layout-footer"
      sx={{
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        className="footer-content-container"
        sx={{
          width: "100%",
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...{ "@media (min-width:1440px)": { maxWidth: 1440 } },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ mr: 2 }}>
            {`Copyright © ${new Date().getFullYear()} PhilHealth Region X`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
