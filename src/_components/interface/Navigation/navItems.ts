// ** Icon imports
import {
  mdiViewDashboardOutline,
  mdiCardMultipleOutline,
  mdiLockOutline,
} from "@mdi/js";

// ** Type import
import { NavItemsType } from "@/_config/types";

const navigation: NavItemsType = [
  {
    title: "Dashboard",
    icon: mdiViewDashboardOutline,
    path: "/",
  },
  {
    sectionTitle: "Components",
  },
  {
    title: "Dialogs",
    icon: mdiCardMultipleOutline,
    path: "/dialogs",
  },
  {
    sectionTitle: "Pages",
  },
  {
    title: "Login",
    icon: mdiLockOutline,
    path: "/login",
    openInNewTab: true,
  },
];

export default navigation;
