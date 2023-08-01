// ** Icon imports
import {
  mdiViewDashboardOutline,
  mdiFilePlusOutline,
  mdiFileMoveOutline,
  mdiFileRefreshOutline,
  mdiFileRemoveOutline,
  mdiDatabaseEyeOutline,
  mdiFileChartOutline,
  mdiAccountTieOutline,
  mdiAccountTieHatOutline,
  mdiMapSearchOutline,
  mdiBookSearchOutline,
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
    sectionTitle: "Create Request",
  },
  {
    title: "Storage",
    icon: mdiFilePlusOutline,
    path: "/create-request/storage",
  },
  {
    title: "Withdrawal",
    icon: mdiFileMoveOutline,
    path: "/create-request/withdrawal",
  },
  {
    title: "Return",
    icon: mdiFileRefreshOutline,
    path: "/create-request/return",
  },
  {
    title: "Disposal",
    icon: mdiFileRemoveOutline,
    path: "/create-request/disposal",
  },
  {
    sectionTitle: "Data Management",
  },
  {
    title: "Inventory",
    icon: mdiDatabaseEyeOutline,
    path: "/inventory",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: mdiFileChartOutline,
  },
  {
    sectionTitle: "User Management",
  },
  {
    title: "Users",
    icon: mdiAccountTieOutline,
    path: "/users",
  },
  {
    title: "Roles",
    icon: mdiAccountTieHatOutline,
    path: "/roles",
  },
  {
    sectionTitle: "Utility",
  },
  {
    icon: mdiMapSearchOutline,
    title: "Map",
    path: "/utility/map",
  },
  {
    icon: mdiBookSearchOutline,
    title: "Glossary",
    path: "/utility/glossary",
  },
];

export default navigation;
