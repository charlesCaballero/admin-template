import { ReactNode } from "react";
import { DrawerHeader } from "../custom/DrawerHeader";
import Footer from "./Footer";
import { MainContentWrapper } from "../custom/MainContentWrapper";
import Box from "@mui/material/Box";

interface ContentProps {
  children: ReactNode;
}

export default function MainContent(props: ContentProps) {
  const { children } = props;

  return (
    <MainContentWrapper>
      <DrawerHeader />
      <Box flexGrow={1} width={"100%"} justifyContent={"space-between"}>
        {children}
      </Box>
      <Footer />
    </MainContentWrapper>
  );
}
