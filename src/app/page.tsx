"use client";
import * as React from "react";
import AppLayout from "@/_components/layout/AppLayout";
import { ColorModeContext } from "@/_config/context";
import CustomTheme from "@/_theme/CustomTheme";

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CustomTheme mode={mode} themeColor="primary">
        <AppLayout />
      </CustomTheme>
    </ColorModeContext.Provider>
  );
}
