// ** Next Imports
import { usePathname } from "next/navigation";

// ** MUI Imports
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Icon from "@mdi/react";
import { useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

// ** Configs Import
import themeConfig from "@/_config/themeConfig";

// ** Types
import { NavLinkType } from "@/_config/types";

// ** Custom Components Imports
import { MenuNavLink } from "@/_components/custom/MenuNavLink";
import { MenuItemTextMetaWrapper } from "@/_components/custom/MenuItemTextMetaWrapper";
import { NavTooltip } from "@/_components/custom/NavToolTip";

// ** Utils
interface Props {
  item: NavLinkType;
  navMinimized?: boolean;
  //   toggleNavVisibility: () => void;
}


const NavLink = ({ item, navMinimized }: Props) => {
  // ** Hooks
  const theme = useTheme();

  const IconTag: string = item.icon!;

  const isNavLinkActive = () => {
    if (usePathname() === item.path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ListItem
      disablePadding
      className="nav-link"
      sx={{ px: "0 !important", zIndex: 0 }}
    >
      <NavTooltip
        title={item.title}
        placement="right"
        arrow
        sx={{ display: navMinimized ? "block" : "none" }}
      >
        <ListItemButton
          disabled={item.disabled || false}
          sx={{
            p: 0,
            mr: 1.5,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        >
          <MenuNavLink
            href={item.path === undefined ? "/" : `${item.path}`}
            {...(item.openInNewTab ? { target: "_blank" } : null)}
            className={isNavLinkActive() ? "active" : ""}
            onClick={(e) => {
              if (item.path === undefined) {
                e.preventDefault();
                e.stopPropagation();
              }
              if (navMinimized) {
                // toggleNavVisibility();
              }
            }}
            sx={{
              pl: 2.5,
              py: 1.2,
              ...(item.disabled
                ? { pointerEvents: "none" }
                : { cursor: "pointer" }),
            }}
          >
            <ListItemIcon
              sx={{
                color: "text.primary",
                transition: "margin .25s ease-in-out",
                minWidth: 35,
              }}
            >
              <Icon
                path={IconTag}
                size={1}
                color={isNavLinkActive() ?theme.palette.common.white:theme.palette.text.primary }
              />
            </ListItemIcon>

            <MenuItemTextMetaWrapper
              sx={{ display: navMinimized ? "none" : "block" }}
            >
              <Typography
                {...(themeConfig.menuTextTruncate && { noWrap: true })}
              >
                {item.title}
              </Typography>
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || "primary"}
                  sx={{
                    height: 20,
                    fontWeight: 500,
                    marginLeft: 1.25,
                    "& .MuiChip-label": {
                      px: 1.5,
                      textTransform: "capitalize",
                    },
                  }}
                />
              ) : null}
            </MenuItemTextMetaWrapper>
          </MenuNavLink>
        </ListItemButton>
      </NavTooltip>
    </ListItem>
  );
};

export default NavLink;
