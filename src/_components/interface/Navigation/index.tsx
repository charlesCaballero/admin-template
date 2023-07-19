// ** Types Import

// ** Custom Menu Components
import {
  NavItemsType,
  NavLinkType,
  NavSectionTitleType,
} from "@/_config/types";
import NavLink from "./NavLink";
import NavSectionTitle from "./NavSectionTitle";

interface Props {
  navMinimized?: boolean;
  //   groupActive: string[];
  //   currentActiveGroup: string[];
  navItems: NavItemsType;
}

const resolveNavItemComponent = (item: NavLinkType | NavSectionTitleType) => {
  if ((item as NavSectionTitleType).sectionTitle) return NavSectionTitle;

  return NavLink;
};

const VerticalNavItems = (props: Props) => {
  // ** Props
  const { navItems, navMinimized } = props;

  const RenderMenuItems = navItems?.map(
    (item: NavLinkType | NavSectionTitleType, index: number) => {
      const TagName: any = resolveNavItemComponent(item);

      return (
        <TagName
          {...props}
          key={index}
          item={item}
          navMinimized={navMinimized}
        />
      );
    }
  );

  return <>{RenderMenuItems}</>;
};

export default VerticalNavItems;
