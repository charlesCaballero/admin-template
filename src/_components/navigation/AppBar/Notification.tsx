import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiBellOutline } from "@mdi/js";
import React from "react";

interface NotificationProps {
  toogleNotification: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNotification: null | HTMLElement;
}

export default function Notification(props: NotificationProps) {
  const { toogleNotification, anchorElNotification } = props;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton color="inherit" onClick={toogleNotification} sx={{ p: 1 }}>
        <Badge
          color="primary"
          overlap="circular"
          variant="dot"
          invisible={false}
        >
          <Icon path={mdiBellOutline} size={1} />
        </Badge>
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElNotification}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNotification)}
        onClose={toogleNotification}
      >
        {/* <MenuItem onClick={toogleNotification}> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
          px={3}
          py={2}
        >
          <Typography fontWeight={"bold"} flexGrow={1} variant={"body1"}>
            Notifications
          </Typography>
          <Chip
            size="small"
            color="primary"
            sx={{
              height: 20,
              fontSize: "0.75rem",
              fontWeight: 500,
              borderRadius: "10px",
            }}
            label="6 New"
          />
        </Box>
        <Divider />
        <MenuItem divider sx={{ alignItems: "flex-start", py: 2 }}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </MenuItem>
        <MenuItem divider sx={{ alignItems: "flex-start", py: 2 }}>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </MenuItem>
        <MenuItem divider sx={{ alignItems: "flex-start", py: 2 }}>
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </MenuItem>
        <Box width={"100%"} textAlign={"center"} pt={2} pb={1}>
          <Button sx={{ mx: "auto" }} variant={"contained"}>
            Read All Notifications
          </Button>
        </Box>
        {/* </MenuItem>  */}
      </Menu>
    </Box>
  );
}
