// ** React Imports
import { ElementType } from "react";

// ** Next Imports
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

// ** MUI Imports
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import Icon from "@mdi/react";
import { useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// ** Configs Import
import themeConfig from "@/_config/themeConfig";

// ** Types
import { NavLinkType } from "@/_config/types";
// ** Custom Components Imports

// ** Utils

interface Props {
  item: NavLinkType;
  navMinimized?: boolean;
  //   toggleNavVisibility: () => void;
}

// ** Styled Components
const MenuNavLink = styled(Link)<
  LinkProps & {
    component?: ElementType;
    target?: "_blank" | undefined;
  }
>(({ theme }) => ({
  width: "100%",
  display: "flex",
  textDecoration: "none",
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: "opacity .25s ease-in-out",
  "&.active, &.active:hover": {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
  },
  "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
    color: `${theme.palette.common.white} !important`,
  },
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
});

const NavTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.light,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.light,
    fontSize: 12,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    boxShadow: theme.shadows,
  },
}));

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
                color={theme.palette.text.primary}
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
