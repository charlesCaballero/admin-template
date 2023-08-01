
import Link from "next/link";
import { styled, useTheme } from "@mui/material/styles";

import router from "next/router";
import Icon from "@mdi/react";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { FormState } from "@/_config/interfaces";
import React from "react";

const LinkStyled = styled(Typography)(({ theme }) => ({
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


export default function LoginForm () {
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
    )
}