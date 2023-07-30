"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

// ** MUI Imports
import { styled, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import {
  Button,
  CardContent,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import MuiCard, { CardProps } from "@mui/material/Card";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import themeConfig from "@/_config/themeConfig";
import router from "next/router";
import Icon from "@mdi/react";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";

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

const LinkStyled = styled("p")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.text.secondary,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

interface FormState {
  password: string;
  showPassword: boolean;
}

export default function Login() {
  const theme = useTheme();
  // ** State
  const [values, setValues] = React.useState<FormState>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              autoFocus
              fullWidth
              id="userId"
              label="User ID"
              sx={{ marginBottom: 2 }}
              color="secondary"
            />
            <FormControl fullWidth>
              <InputLabel color="secondary" htmlFor="auth-login-password">
                Password
              </InputLabel>
              <OutlinedInput
                label="Password"
                color="secondary"
                value={values.password}
                id="auth-login-password"
                onChange={handleChange("password")}
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ? (
                        <Icon path={mdiEyeOutline} size={1} />
                      ) : (
                        <Icon path={mdiEyeOffOutline} size={1} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <Link href="/">
                <LinkStyled onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ marginBottom: 7 }}
              onClick={() => router.push("/")}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </BoxLayout>
  );
}
