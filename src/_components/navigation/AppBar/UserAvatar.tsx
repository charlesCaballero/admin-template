import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

interface UserAvatarProps {
  toogleUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
}

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function UserAvatar(props: UserAvatarProps) {
  const { toogleUserMenu, anchorElUser } = props;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={toogleUserMenu} sx={{ p: 1 }}>
        <Avatar
          sx={{ bgcolor: "green", width: 35, height: 35 }}
          alt="Remy Sharp"
          src="/static/images/avatar/2.jpg"
        />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={toogleUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={toogleUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
