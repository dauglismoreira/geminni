import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {MdKeyboardArrowDown} from "react-icons/md";

interface DesktopMenuProps {
  menu?: {
    value: string;
    key: string;
    description: string
    enumeration?: {
      items: {
        name_pt_br: string;
        link: string;
      }[]
    },
  }[];
  openSubMenu: string | null;
  handleOpenSubMenu: (menuLabel: string) => void;
  handleCloseSubMenu: () => void;
  fixedLink:any;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
                                                   menu,
                                                   fixedLink,
                                                   openSubMenu,
                                                   handleOpenSubMenu,
                                                   handleCloseSubMenu,
                                                 }) => {

  return (
    <div className="menu-desktop">
      {/* {menu?.map((item, index) => (
        <Link
          href={item.enumeration ? '#' : './../' + item.value.toLocaleLowerCase()}
          key={index}
          onMouseOver={() => item.enumeration && handleOpenSubMenu(item.value)}
          className={`relative ${openSubMenu === item.value ? "active" : ""}`}
        >
          {item.value}
          {item.enumeration && <MdKeyboardArrowDown/>}
          {item.enumeration && openSubMenu === item.value && (
            <div className="header-menu" onMouseLeave={handleCloseSubMenu}>
              {item.enumeration &&
                item.enumeration.items.map((subItem: any, subIndex: number) => (
                  <Link href={subItem.link ? './../' + subItem.link : '#'} key={subIndex}>{subItem.name_pt_br}</Link>
                ))}
            </div>
          )}
        </Link>
      ))} */}
      {fixedLink?.map((item:any, index:number) => (
        <div
          key={index}
          onMouseOver={() => item.subMenu && handleOpenSubMenu(item.link)}
          className={`relative flex justify-between items-center ${openSubMenu === item.value ? "active" : ""}`}
        >
          <Link href={'./../' + item.link}>{item.label}</Link>
          {item.subMenu && <MdKeyboardArrowDown/>}
          {item.subMenu && openSubMenu === item.link && (
            <div className="header-menu" onMouseLeave={handleCloseSubMenu}>
              {item.subMenu &&
                item.subMenu.map((subItem: any, subIndex: number) => (
                  <a
                    href={subItem.link ? './../' + subItem.link : '#'} key={subIndex}
                  >{subItem.label}</a>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;