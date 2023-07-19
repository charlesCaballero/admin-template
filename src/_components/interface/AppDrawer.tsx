import { drawerWidth } from "@/_config/global";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import NavHeader from "./Header";
import Navigation from "./Navigation";
import navItems from "./Navigation/navItems";

interface AppDrawerProps {
  open: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(10)} + 1px)`,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    overflowY: "hidden",
  },
  "& .MuiDrawer-paper:hover": {
    overflowY: "auto",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

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
