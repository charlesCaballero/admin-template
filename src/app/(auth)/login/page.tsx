"use client";
import * as React from "react";
import Image from "next/image";

// ** MUI Imports
import { styled, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import {
  CardContent,
  Typography,
} from "@mui/material";
import MuiCard, { CardProps } from "@mui/material/Card";
import themeConfig from "@/_config/themeConfig";
import LoginForm from "@/_components/page/login/LoginForm";

const BoxLayout = styled(Box)<BoxProps>(({ theme }) => ({
  height: "100vh",
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(5),
  backgroundImage: "url(/images/background4.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
  boxShadow: theme.shadows,
  position: "absolute",
}));


export default function Login() {
  const theme = useTheme();
  
  return (
    <BoxLayout component={"main"}>
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{
            padding: (theme) => `${theme.spacing(6, 5, 1.5)} !important`,
          }}
        >
          <Box
            sx={{
              mb: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/pwms_logo.png"
              width={65}
              height={65}
              alt="logo"
            />

            <Typography
              variant="h6"
              sx={{
                ml: 1,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "2.5rem !important",
                letterSpacing: theme.spacing(0.5),
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              Welcome to {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography variant="body2">
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
          <LoginForm/>
        </CardContent>
      </Card>
    </BoxLayout>
  );
}
