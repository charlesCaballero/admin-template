import { Box } from "@mui/material";
import { ReactNode } from "react";
import { DrawerHeader } from "../custom/DrawerHeader";
import Footer from "./Footer";

interface ContentProps {
  children: ReactNode;
}

export default function MainContent(props: ContentProps) {
  const { children } = props;

  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={"column"}
      px={3}
      pt={3}
      pb={1}
      flexGrow={1}
      minHeight={"100vh"}
    >
      <DrawerHeader />
      <Box flexGrow={1} width={"100%"} justifyContent={"space-between"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
