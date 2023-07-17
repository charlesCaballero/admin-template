import { ReactNode } from "react";

export type NavLinkType = {
  path?: string;
  title: string;
  action?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type NavSectionTitleType = {
  sectionTitle: string;
  action?: string;
};

export type NavItemsType = (NavLinkType | NavSectionTitleType)[];
