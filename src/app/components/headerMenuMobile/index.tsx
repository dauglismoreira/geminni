import React from "react";
import { MdClose } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import "./styles.css";
import Link from "next/link";

interface MobileMenuProps {
  openMobileMenu: boolean;
  onClose: () => void;
  fixedLink:any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ openMobileMenu, onClose, fixedLink }) => {
  return (
    <div className={`menu-mobile ${openMobileMenu ? 'open' : 'close'}`}>
        <div className={`menu-mobile-close ${openMobileMenu ? 'open' : 'close'}`}>
            <MdClose onClick={onClose} />
        </div>
        <div className={`menu-mobile-body ${openMobileMenu ? 'open' : 'close'}`}>
            <div className="menu-mobile-logo">
                <svg width="220" height="37" viewBox="0 0 220 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_238_9020)">
                    <path d="M181.979 30.6465H182.423V36.1167H181.979V30.6465Z" fill="#3C2222"/>
                    <path d="M184.317 30.6465H184.691L187.518 34.0928L190.363 30.6465H190.722V36.1167H190.278V31.4396L187.593 34.7035H187.444L184.759 31.4396V36.1167H184.315V30.6465H184.317Z" fill="#3C2222"/>
                    <path d="M192.183 33.3817C192.183 32.3335 192.616 31.4863 193.411 30.9892C193.901 30.6708 194.555 30.4995 195.336 30.4995C196.117 30.4995 196.766 30.6708 197.256 30.9892C198.051 31.4863 198.484 32.3335 198.484 33.3817C198.484 35.1151 197.322 36.2639 195.336 36.2639C193.351 36.2639 192.185 35.1132 192.185 33.3817H192.183ZM195.334 35.8245C196.957 35.8133 198.035 35.009 198.035 33.3817C198.035 32.3949 197.602 31.6446 196.795 31.2443C196.39 31.0469 195.908 30.9445 195.334 30.9445C194.761 30.9445 194.278 31.045 193.873 31.2443C193.067 31.6446 192.63 32.3949 192.63 33.3817C192.63 35.009 193.712 35.8133 195.334 35.8245Z" fill="#3C2222"/>
                    <path d="M198.916 30.6465H199.417L202.152 35.5097L204.887 30.6465H205.384L202.317 36.1167H201.983L198.916 30.6465Z" fill="#3C2222"/>
                    <path d="M206.469 30.6465H211.346V31.0933H206.913V33.1172H210.764V33.5566H206.913V35.6773H211.419V36.1167H206.469V30.6465Z" fill="#3C2222"/>
                    <path d="M212.825 30.6465H213.268V36.1167H212.825V30.6465Z" fill="#3C2222"/>
                    <path d="M216.592 35.787H218.011C219.021 35.787 219.549 35.3793 219.549 34.7034C219.549 34.0276 219.021 33.6049 218.011 33.6049H216.592C215.375 33.6049 214.603 33.011 214.603 32.0782C214.603 31.1454 215.38 30.5701 216.592 30.5701H218.084C219.32 30.5701 220.077 31.2534 219.993 32.229H219.571C219.624 31.46 219.093 30.9927 218.011 30.9927H216.592C215.578 30.9927 215.05 31.3967 215.05 32.0763C215.05 32.7559 215.578 33.1748 216.592 33.1748H218.011C219.223 33.1748 219.996 33.7688 219.996 34.7016C219.996 35.6344 219.219 36.2097 218.011 36.2097H216.519C215.283 36.2097 214.526 35.5264 214.61 34.5508H215.032C214.979 35.3197 215.511 35.787 216.592 35.787Z" fill="#3C2222"/>
                    <path d="M46.2955 14.934C46.2955 9.80458 49.7658 6.36011 55.6705 6.36011C59.5734 6.36011 62.292 7.81609 63.7714 10.2421L62.6898 11.0167C61.3479 8.84385 59.0839 7.68949 55.6705 7.68949C50.6879 7.68949 47.6264 10.2421 47.6264 14.934C47.6264 19.626 50.686 22.2009 55.6705 22.2009C58.5138 22.2009 60.9373 21.2775 62.3708 19.451V15.4535H54.3396V14.1483H63.6797V19.7414H63.6449V19.9499L63.5991 20.03L63.4854 20.1808C61.9382 22.1805 59.1847 23.508 55.6705 23.508C49.7658 23.508 46.2955 20.0877 46.2955 14.934Z" fill="#3C2222"/>
                    <path d="M78.0831 6.79956H92.5874V8.12894H79.4012V14.1484H90.8568V15.4536H79.4012V21.7616H92.8019V23.0668H78.0813V6.79956H78.0831Z" fill="#3C2222"/>
                    <path d="M106.298 6.79956H107.412L115.819 17.0492L124.283 6.79956H125.352V23.0686H124.032V9.1567L116.045 18.8627H115.601L107.614 9.1567V23.0686H106.294V6.79956H106.298Z" fill="#3C2222"/>
                    <path d="M140.305 6.79956H141.625V23.0686H140.305V6.79956Z" fill="#3C2222"/>
                    <path d="M172.594 6.79956H171.455L157.882 20.8623V6.79956H156.573V23.0686H157.585L171.272 8.90348V23.0686H172.592V6.79956H172.594Z" fill="#3C2222"/>
                    <path d="M187.545 6.79956H188.684L202.257 20.8623V6.79956H203.565V23.0686H202.553L188.867 8.90348V23.0686H187.547V6.79956H187.545Z" fill="#3C2222"/>
                    <path d="M218.513 6.79956H219.833V23.0686H218.513V6.79956Z" fill="#3C2222"/>
                    <path d="M21.3806 29.8682L6.97714 15.2395L21.9819 0L36.3853 14.6288L21.3806 29.8682ZM8.31354 15.2395L21.3806 28.5109L35.0489 14.6288L21.9819 1.35731L8.31354 15.2395Z" fill="#3C2222"/>
                    <path d="M14.4034 29.8682L0 15.2395L15.0047 0L29.4081 14.6288L14.4034 29.8682ZM1.3364 15.2395L14.4034 28.5109L28.0717 14.6288L15.0047 1.35731L1.3364 15.2395Z" fill="#3C2222"/>
                    <path d="M14.4034 29.8682L0 15.2395L15.0047 0L29.4081 14.6288L14.4034 29.8682ZM1.3364 15.2395L14.4034 28.5109L28.0717 14.6288L15.0047 1.35731L1.3364 15.2395Z" fill="#3C2222"/>
                    <path d="M21.5226 7.29758L13.2407 15.709L13.9083 16.387L22.1901 7.9756L21.5226 7.29758Z" fill="#3C2222"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_238_9020">
                    <rect width="220" height="36.2656" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="menu-mobile-primary">
                <li onClick={onClose}><Link href="./../imoveis">Imóveis</Link></li>
                <li onClick={onClose}><Link href="./../contato">Contato</Link></li>
                <li onClick={onClose}><Link href="./../regioes">Regiões</Link></li>
                <li onClick={onClose}><Link href="./../sobre">Sobre</Link></li>
            </div>
            <div className="menu-mobile-secondary">
                <li onClick={onClose}><Link href="./../imoveis?page=1&property_localization=Frente mar">Frente mar</Link></li>
                <li onClick={onClose}><Link href="./../imoveis?page=1&property_localization=Praia brava">Praia brava</Link></li>
                <li onClick={onClose}><Link href="./../imoveis?page=1&property_localization=Penthouses">Penthouses</Link></li>
            </div>
            <div className="menu-mobile-foot">
            <Link href='https://instagram.com/geminni_imoveis' target="_blank"><p><IoLogoInstagram />geminni_imoveis</p></Link>
            </div>
        </div>
    </div>
  );
};

export default MobileMenu;