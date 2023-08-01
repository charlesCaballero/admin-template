import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";
import { DrawerHeader } from "../custom/DrawerHeader";
import Footer from "./Footer";

interface ContentProps {
  children: ReactNode;
}


export const Main = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all .25s ease-in-out",
    minHeight: "100vh",
    flexGrow: 1,
    flexDirection: "column",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    position: "relative",
    backgroundImage: theme.palette.mode === 'dark' ?"url(/images/content_background_dark.png)":"url(/images/content_background.png)",
    backgroundPosition: "right bottom",
    backgroundSize: "60%",
    backgroundRepeat: "no-repeat",
})
);

export default function MainContent(props: ContentProps) {
  const { children } = props;

  return (
    <Main
    className="main"
      component={"main"}
    >
      <DrawerHeader />
      <Box flexGrow={1} width={"100%"} justifyContent={"space-between"}>
        {children}
      </Box>
      <Footer />
    </Main>
  );
}
