import Link from "next/link";
import { styled } from "@mui/material/styles";
// import router from "next/router";
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
import React from "react";
import { loginMutation } from "@/_utils/mutations";
// import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormHelperText from "@mui/material/FormHelperText";
import apiClient from "@/_utils/apiClient";
import Alert from "@mui/material/Alert";
import { getCSRFQuery } from "@/_utils/queries";

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

interface LoginFormProps {
  hris: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  hris: Yup.string()
    .required("You forgot to give your id number.")
    .matches(
      /^[0-9]+$/,
      "Your id number should not contain any letter or symbol"
    )
    .min(8, "Id number should be 8 digits")
    .max(8, "Id number can't exceed 8 digits"),
  password: Yup.string()
    .required("Your password is empty.")
    .min(6, "Password should at atleast contain 6 characters."),
});

export default function LoginForm() {
  // ** State
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [authError, setAuthError] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formSubmit = async (data: LoginFormProps) => {
    apiClient
      .get(getCSRFQuery)
      .then(() => {
        // this GET request gets the required csrf cookie from laravel/sanctum(recommended back-end authentication )
        apiClient //after successfully getting the csrf cookie, POST request for login authentication can be executed
          .post(loginMutation, data)
          .then((response) => {
            console.log("login: " + response);
          })
          .catch((error) => {
            setAuthError(error.response.data.message);
          });
      })
      .catch((error) => {
        setAuthError(error.response);
      });
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(formSubmit)}>
      {authError && (
        <Alert severity="error" sx={{ mb: 3, fontSize: 12 }}>
          {authError}
        </Alert>
      )}
      <TextField
        autoFocus
        fullWidth
        id="hris"
        {...register("hris")}
        error={errors.hris !== undefined}
        helperText={errors.hris?.message}
        label="HRIS Number"
        sx={{ marginBottom: 2 }}
        color="secondary"
      />
      <FormControl fullWidth>
        <InputLabel
          color={errors.password?.message ? "error" : "secondary"}
          htmlFor="auth-login-password"
        >
          Password
        </InputLabel>
        <OutlinedInput
          label="Password"
          color="secondary"
          {...register("password")}
          error={errors.password !== undefined}
          id="auth-login-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle password visibility"
              >
                {showPassword ? (
                  <Icon path={mdiEyeOutline} size={1} />
                ) : (
                  <Icon path={mdiEyeOffOutline} size={1} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password?.message && (
          <FormHelperText id="outlined-weight-helper-text" error>
            {errors.password?.message}
          </FormHelperText>
        )}
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
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}
