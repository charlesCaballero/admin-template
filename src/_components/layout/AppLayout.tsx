"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@/_components/interface/AppBar";
import AppDrawer from "@/_components/interface/AppDrawer";
import MainContent from "../interface/MainContent";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const [open, setOpen] = React.useState(true);

  const toogleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar open={open} toogleDrawer={toogleDrawer} />
      <AppDrawer open={open} />
      <MainContent>{children}</MainContent>
    </Box>
  );
}
