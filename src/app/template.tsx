"use client";
import * as React from "react";
import AppLayout from "@/_components/layout/AppLayout";
import { ColorModeContext } from "@/_config/context";
import CustomTheme from "@/_theme/CustomTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { usePathname } from "next/navigation";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const loginPath = "/login";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const pathname = usePathname();

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const isLinkLogin = () => {
    if (pathname === loginPath) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CustomTheme mode={mode} themeColor="primary">
        <CssBaseline />
        {isLinkLogin() ? children : <AppLayout>{children}</AppLayout>}
      </CustomTheme>
    </ColorModeContext.Provider>
  );
}
