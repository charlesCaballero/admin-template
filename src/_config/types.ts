import { ReactNode } from "react";

export type NavLink = {
  path?: string;
  title: string;
  action?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | ReactNode;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
};

export type VerticalNavItemsType = (NavLink | NavSectionTitle)[];
