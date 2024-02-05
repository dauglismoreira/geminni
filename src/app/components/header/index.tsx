'use client';

import { IoLogoInstagram, IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import './styles.css';
import { useEffect, useState } from "react";
import FullSearch from "../fullSearch";
import MobileMenu from "../headerMenuMobile";
import DesktopMenu from "../headerMenuDesktop";
import Link from "next/link";
import { headerMenu } from '@/app/mock';

interface FooterProps {
    data?:any;
    fixedLink?:any;
}

export const Header = ({data, fixedLink}: FooterProps) => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openFullSearch, setOpenFullSearch] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  
    const handleOpenSubMenu = (menuLabel: string) => {
      setOpenSubMenu(menuLabel);
      setOpenFullSearch(false);
    };
  
    const handleCloseSubMenu = () => {
      setOpenSubMenu(null);
    };

    const handleToggleMobileMenu = () => {
      setOpenMobileMenu(!openMobileMenu);
    };

    const handleToggleFullSearch = () => {
        setOpenFullSearch(!openFullSearch);
      };

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        if (bodyElement) {
            if (openMobileMenu) {
                bodyElement.style.overflow = 'hidden';
            } else {
                bodyElement.style.overflow = '';
            }
        }
    }, [openMobileMenu]);

    return(
        <>
        <div className="header">
            <div className="header-container">
                <div className="col-left">
                {!openFullSearch ?
                    <IoSearchOutline
                        className="full-search-action"
                        onClick={() => setOpenFullSearch(!openFullSearch)}
                    />
                    :
                    <MdClose
                        className="full-search-action"
                        onClick={() => setOpenFullSearch(!openFullSearch)}
                    />
                    }
                    <Link href='./../../'><svg className="header-logo" width="248" height="41" viewBox="0 0 248 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_670_421)">
                        <path d="M205.141 34.0148H205.641V40.0862H205.141V34.0148Z" fill="#3C2222"/>
                        <path d="M207.775 34.0148H208.197L211.383 37.8399L214.591 34.0148H214.996V40.0862H214.496V34.8951L211.468 38.5177H211.301L208.273 34.8951V40.0862H207.773V34.0148H207.775Z" fill="#3C2222"/>
                        <path d="M216.643 37.0505C216.643 35.887 217.13 34.9468 218.027 34.395C218.579 34.0417 219.317 33.8515 220.197 33.8515C221.078 33.8515 221.809 34.0417 222.361 34.395C223.258 34.9468 223.745 35.887 223.745 37.0505C223.745 38.9744 222.435 40.2495 220.197 40.2495C217.959 40.2495 216.645 38.9723 216.645 37.0505H216.643ZM220.195 39.7618C222.024 39.7494 223.239 38.8566 223.239 37.0505C223.239 35.9552 222.751 35.1224 221.842 34.6781C221.385 34.4591 220.842 34.3454 220.195 34.3454C219.548 34.3454 219.005 34.457 218.548 34.6781C217.639 35.1224 217.147 35.9552 217.147 37.0505C217.147 38.8566 218.366 39.7494 220.195 39.7618Z" fill="#3C2222"/>
                        <path d="M224.233 34.0148H224.797L227.88 39.4125L230.964 34.0148H231.524L228.066 40.0862H227.69L224.233 34.0148Z" fill="#3C2222"/>
                        <path d="M232.747 34.0148H238.244V34.5107H233.247V36.757H237.589V37.2447H233.247V39.5985H238.327V40.0862H232.747V34.0148Z" fill="#3C2222"/>
                        <path d="M239.912 34.0148H240.412V40.0862H239.912V34.0148Z" fill="#3C2222"/>
                        <path d="M244.158 39.7204H245.758C246.896 39.7204 247.492 39.2679 247.492 38.5177C247.492 37.7676 246.896 37.2985 245.758 37.2985H244.158C242.786 37.2985 241.916 36.6392 241.916 35.6039C241.916 34.5686 242.792 33.9301 244.158 33.9301H245.841C247.233 33.9301 248.087 34.6885 247.992 35.7713H247.516C247.576 34.9178 246.977 34.3992 245.758 34.3992H244.158C243.016 34.3992 242.42 34.8476 242.42 35.6019C242.42 36.3561 243.016 36.8211 244.158 36.8211H245.758C247.124 36.8211 247.996 37.4803 247.996 38.5156C247.996 39.551 247.12 40.1895 245.758 40.1895H244.076C242.683 40.1895 241.829 39.4311 241.924 38.3483H242.4C242.34 39.2017 242.939 39.7204 244.158 39.7204Z" fill="#3C2222"/>
                        <path d="M52.1877 16.5755C52.1877 10.8823 56.0996 7.0592 62.7558 7.0592C67.1554 7.0592 70.2201 8.67522 71.8877 11.3679L70.6685 12.2275C69.1558 9.81593 66.6037 8.53469 62.7558 8.53469C57.139 8.53469 53.688 11.3679 53.688 16.5755C53.688 21.7831 57.137 24.6411 62.7558 24.6411C65.961 24.6411 68.6929 23.6161 70.3089 21.5888V17.152H61.2555V15.7034H71.7844V21.9112H71.7451V22.1427L71.6935 22.2315L71.5654 22.3989C69.8212 24.6184 66.7173 26.0918 62.7558 26.0918C56.0996 26.0918 52.1877 22.2956 52.1877 16.5755Z" fill="#3C2222"/>
                        <path d="M88.021 7.54691H104.371V9.02239H89.5068V15.7034H102.42V17.1521H89.5068V24.1534H104.613V25.602H88.0189V7.54691H88.021Z" fill="#3C2222"/>
                        <path d="M119.827 7.54691H121.083L130.56 18.9231L140.101 7.54691H141.306V25.6041H139.818V10.1631L130.814 20.9358H130.314L121.31 10.1631V25.6041H119.823V7.54691H119.827Z" fill="#3C2222"/>
                        <path d="M158.163 7.54691H159.65V25.6041H158.163V7.54691Z" fill="#3C2222"/>
                        <path d="M194.56 7.54691H193.277L177.976 23.1553V7.54691H176.501V25.6041H177.641L193.07 9.88206V25.6041H194.558V7.54691H194.56Z" fill="#3C2222"/>
                        <path d="M211.414 7.54691H212.698L227.998 23.1553V7.54691H229.474V25.6041H228.333L212.904 9.88206V25.6041H211.417V7.54691H211.414Z" fill="#3C2222"/>
                        <path d="M246.324 7.54691H247.812V25.6041H246.324V7.54691Z" fill="#3C2222"/>
                        <path d="M24.1018 33.151L7.86517 16.9144L24.7796 0L41.0162 16.2366L24.1018 33.151ZM9.37166 16.9144L24.1018 31.6445L39.5097 16.2366L24.7796 1.50649L9.37166 16.9144Z" fill="#3C2222"/>
                        <path d="M16.2366 33.151L0 16.9144L16.9144 0L33.151 16.2366L16.2366 33.151ZM1.50649 16.9144L16.2366 31.6445L31.6445 16.2366L16.9144 1.50649L1.50649 16.9144Z" fill="#3C2222"/>
                        <path d="M16.2366 33.151L0 16.9144L16.9144 0L33.151 16.2366L16.2366 33.151ZM1.50649 16.9144L16.2366 31.6445L31.6445 16.2366L16.9144 1.50649L1.50649 16.9144Z" fill="#3C2222"/>
                        <path d="M24.2618 8.09969L14.9259 17.4356L15.6784 18.1881L25.0143 8.85223L24.2618 8.09969Z" fill="#3C2222"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_670_421">
                        <rect width="248" height="40.2515" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg></Link>
                </div>
                <div className="col-center">
                    <div
                        className="toogle"
                        onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <DesktopMenu
                        menu={data[1]?.configs}
                        openSubMenu={openSubMenu}
                        handleOpenSubMenu={handleOpenSubMenu}
                        handleCloseSubMenu={handleCloseSubMenu}
                        fixedLink={headerMenu}
                    />
                </div>
                <div className="col-right">
                    <a href={`https://instagram.com/${data[0]?.configs[5].description}`} target="_blank"><IoLogoInstagram className="instagram-link"/></a>
                    <IoSearchOutline
                        className="full-search-action"
                        onClick={() => setOpenFullSearch(!openFullSearch)}
                    />
                </div>
            </div>
        </div>
        <div className="h-20 lg:h-24 w-full"></div>
        <MobileMenu
            openMobileMenu={openMobileMenu} onClose={handleToggleMobileMenu}
            fixedLink={headerMenu}
        />
        <FullSearch openFullSearch={openFullSearch} onClose={handleToggleFullSearch} />
        </>
    )
}