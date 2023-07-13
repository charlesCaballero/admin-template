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
import { VerticalNavItemsType } from "@/_config/types";

const navigation = (): VerticalNavItemsType => {
  return [
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
      openInNewTab: true,
    },
    {
      title: "Withdrawal",
      icon: mdiFileMoveOutline,
      path: "/create-request/withdrawal",
      openInNewTab: true,
    },
    {
      title: "Return",
      icon: mdiFileRefreshOutline,
      path: "/create-request/return",
      openInNewTab: true,
    },
    {
      title: "Disposal",
      icon: mdiFileRemoveOutline,
      path: "/create-request/disposal",
      openInNewTab: true,
    },
    {
      sectionTitle: "Data Management",
    },
    {
      title: "Inventory",
      icon: mdiDatabaseEyeOutline,
      path: "/typography",
    },
    {
      title: "Reports",
      path: "/icons",
      icon: mdiFileChartOutline,
    },
    {
      sectionTitle: "User Management",
    },
    {
      title: "Users",
      icon: mdiAccountTieOutline,
      path: "/cards",
    },
    {
      title: "Roles",
      icon: mdiAccountTieHatOutline,
      path: "/tables",
    },
    {
      sectionTitle: "Utilities",
    },
    {
      icon: mdiMapSearchOutline,
      title: "Map",
      path: "/form-layouts",
    },
    {
      icon: mdiBookSearchOutline,
      title: "Glossary",
      path: "/form-layouts",
    },
  ];
};

export default navigation;
