import { useTheme } from "@mui/material/styles";
import NavHeader from "./Header";
import Navigation from "./Navigation";
import navItems from "./Navigation/navItems";
import { Drawer } from "../custom/Drawer";

interface AppDrawerProps {
  open: boolean;
}

export default function AppDrawer(props: AppDrawerProps) {
  const theme = useTheme();
  const { open } = props;
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          borderRight: 0,
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <NavHeader open={open} />
      <Navigation navItems={navItems} navMinimized={!open} />
    </Drawer>
  );
}
