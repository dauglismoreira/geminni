import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface DesktopMenuProps {
    menu?:{
        label:string;
        link:string;
        subMenu?:{
            label:string;
            link:string;
        }[],
    }[];
    openSubMenu: string | null;
    handleOpenSubMenu: (menuLabel: string) => void;
    handleCloseSubMenu: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  menu,
  openSubMenu,
  handleOpenSubMenu,
  handleCloseSubMenu,
}) => {
  return (
    <div className="menu-desktop">
      {menu?.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          onMouseOver={() => item.subMenu && handleOpenSubMenu(item.label)}
          className={`relative ${openSubMenu === item.label ? "active" : ""}`}
        >
          {item.label}
          {item.subMenu && <MdKeyboardArrowDown />}
          {item.subMenu && openSubMenu === item.label && (
            <div className="header-menu" onMouseLeave={handleCloseSubMenu}>
              {item.subMenu &&
                item.subMenu.map((subItem: any, subIndex: number) => (
                  <Link href={subItem.link} key={subIndex}>{subItem.label}</Link>
                ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;