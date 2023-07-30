// ** MUI Imports
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import packageInfo from "../../../package.json";

const version = packageInfo.version;

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
          paddingTop: theme.spacing(1),
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
          <Typography
            variant="subtitle2"
            sx={{ flexGrow: 1 }}
            color={theme.palette.text.secondary}
          >
            {`Copyright © ${new Date().getFullYear()} PhilHealth Region X`}
          </Typography>
          <Typography variant="subtitle2" color={theme.palette.text.secondary}>
            {`version ${version}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
