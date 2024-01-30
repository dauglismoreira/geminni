import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface DesktopMenuProps {
    menu?:{
        value:string;
        key:string;
        enumeration?:{
          items:{
            name_pt_br:string;
            link:string;
          }[]
        },
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
          href={item.enumeration ? '#' : item.value.toLocaleLowerCase()}
          key={index}
          onMouseOver={() => item.enumeration && handleOpenSubMenu(item.value)}
          className={`relative ${openSubMenu === item.value ? "active" : ""}`}
        >
          {item.value}
          {item.enumeration && <MdKeyboardArrowDown />}
          {item.enumeration && openSubMenu === item.value && (
            <div className="header-menu" onMouseLeave={handleCloseSubMenu}>
              {item.enumeration &&
                item.enumeration.items.map((subItem: any, subIndex: number) => (
                  <Link href={subItem.link ? subItem.link : '#'} key={subIndex}>{subItem.name_pt_br}</Link>
                ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;