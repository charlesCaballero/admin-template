import Toolbar from "@mui/material/Toolbar";
import { AppBarContainer } from "../../custom/AppBarContainer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import React from "react";
import UserAvatar from "./UserAvatar";
import Notification from "./Notification";
import AppTheme from "./AppTheme";
import { useTheme } from "@mui/material/styles";
import Icon from "@mdi/react";
import { mdiMenu, mdiChevronLeft } from "@mdi/js";

// Props needed in the component
interface AppBarProps {
  open: boolean;
  toogleDrawer: () => void;
}

export default function AppBar(props: AppBarProps) {
  const theme = useTheme();
  const { open, toogleDrawer } = props;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElNotification, setanchorElNotification] =
    React.useState<null | HTMLElement>(null);

  const toogleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    anchorElUser === null
      ? setAnchorElUser(event.currentTarget)
      : setAnchorElUser(null);
  };

  const toogleNotification = (event: React.MouseEvent<HTMLElement>) => {
    anchorElNotification === null
      ? setanchorElNotification(event.currentTarget)
      : setanchorElNotification(null);
  };

  return (
    <AppBarContainer
      color="default"
      position="fixed"
      open={open}
      sx={{
        borderRight: 0,
        backgroundColor: theme.palette.background.default,
        backgroundImage: "none",
        pt: theme.spacing(0.8),
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {/* Show menu icon if drawer is minimized */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toogleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Icon path={mdiMenu} size={1} />
          </IconButton>
          {/* Show chevron icon if drawer is open */}
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={toogleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(!open && { display: "none" }),
            }}
          >
            <Icon path={mdiChevronLeft} size={1} />
          </IconButton>
        </Box>
        <AppTheme />
        <Notification
          anchorElNotification={anchorElNotification}
          toogleNotification={toogleNotification}
        />
        <UserAvatar
          anchorElUser={anchorElUser}
          toogleUserMenu={toogleUserMenu}
        />
      </Toolbar>
    </AppBarContainer>
  );
}
