'use client'

import { IoLogoInstagram } from "react-icons/io5";
import './styles.css';
import Link from "next/link";
import ImpacteIcon from '@/app/components/impacte/ImpacteIcon'

interface FooterProps {
    data?:any;
    menu1?:{
        name_pt_br:string;
        link:string;
    }[];
    menu2?:{
        name_pt_br:string;
        link:string;
    }[];
}

export const Footer = ({data, menu1, menu2}: FooterProps) => {

    return(
        <div className="footer">
            <div className="footer-info">
                <div className="footer-logo">
                    <svg width="388" height="64" viewBox="0 0 388 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_670_344)">
                        <path d="M320.946 54.0493H321.728V63.6967H320.946V54.0493Z" fill="#CEBCB0"/>
                        <path d="M325.068 54.0493H325.727L330.713 60.1274L335.731 54.0493H336.364V63.6967H335.582V55.4482L330.845 61.2044H330.584L325.847 55.4482V63.6967H325.065V54.0493H325.068Z" fill="#CEBCB0"/>
                        <path d="M338.941 58.8732C338.941 57.0245 339.704 55.5304 341.107 54.6536C341.971 54.0921 343.125 53.79 344.502 53.79C345.879 53.79 347.024 54.0921 347.887 54.6536C349.29 55.5304 350.053 57.0245 350.053 58.8732C350.053 61.9303 348.003 63.9563 344.502 63.9563C341.001 63.9563 338.944 61.927 338.944 58.8732H338.941ZM344.499 63.1813C347.36 63.1616 349.261 61.7431 349.261 58.8732C349.261 57.1328 348.498 55.8095 347.076 55.1035C346.361 54.7554 345.511 54.5748 344.499 54.5748C343.487 54.5748 342.636 54.7522 341.922 55.1035C340.499 55.8095 339.73 57.1328 339.73 58.8732C339.73 61.7431 341.637 63.1616 344.499 63.1813Z" fill="#CEBCB0"/>
                        <path d="M350.816 54.0493H351.699L356.523 62.6263L361.346 54.0493H362.223L356.814 63.6967H356.225L350.816 54.0493Z" fill="#CEBCB0"/>
                        <path d="M364.137 54.0493H372.737V54.8374H364.919V58.4067H371.712V59.1817H364.919V62.9218H372.866V63.6967H364.137V54.0493Z" fill="#CEBCB0"/>
                        <path d="M375.346 54.0493H376.128V63.6967H375.346V54.0493Z" fill="#CEBCB0"/>
                        <path d="M381.99 63.1154H384.492C386.274 63.1154 387.205 62.3963 387.205 61.2043C387.205 60.0123 386.274 59.2669 384.492 59.2669H381.99C379.843 59.2669 378.482 58.2194 378.482 56.5743C378.482 54.9292 379.853 53.9146 381.99 53.9146H384.621C386.801 53.9146 388.136 55.1197 387.987 56.8403H387.243C387.337 55.4841 386.4 54.6599 384.492 54.6599H381.99C380.202 54.6599 379.271 55.3725 379.271 56.571C379.271 57.7696 380.202 58.5084 381.99 58.5084H384.492C386.629 58.5084 387.994 59.5559 387.994 61.201C387.994 62.8461 386.623 63.8608 384.492 63.8608H381.86C379.681 63.8608 378.346 62.6557 378.495 60.935H379.238C379.145 62.2912 380.082 63.1154 381.99 63.1154Z" fill="#CEBCB0"/>
                        <path d="M81.6485 26.3381C81.6485 17.2916 87.7687 11.2168 98.1825 11.2168C105.066 11.2168 109.86 13.7846 112.47 18.0633L110.562 19.4293C108.195 15.5972 104.203 13.5613 98.1825 13.5613C89.395 13.5613 83.9957 18.0633 83.9957 26.3381C83.9957 34.613 89.3917 39.1543 98.1825 39.1543C103.197 39.1543 107.471 37.5256 109.999 34.3043V27.2543H95.8353V24.9524H112.308V34.8165H112.246V35.1843L112.166 35.3255L111.965 35.5915C109.236 39.1182 104.38 41.4594 98.1825 41.4594C87.7687 41.4594 81.6485 35.4273 81.6485 26.3381Z" fill="#CEBCB0"/>
                        <path d="M137.71 11.9922H163.29V14.3367H140.035V24.9528H160.238V27.2547H140.035V38.3798H163.669V40.6816H137.707V11.9922H137.71Z" fill="#CEBCB0"/>
                        <path d="M187.471 11.9922H189.436L204.263 30.0688L219.191 11.9922H221.075V40.6849H218.748V16.1493L204.661 33.2671H203.879L189.792 16.1493V40.6849H187.464V11.9922H187.471Z" fill="#CEBCB0"/>
                        <path d="M247.448 11.9922H249.776V40.6849H247.448V11.9922Z" fill="#CEBCB0"/>
                        <path d="M304.392 11.9922H302.385L278.447 36.7938V11.9922H276.138V40.6849H277.923L302.061 15.7027V40.6849H304.389V11.9922H304.392Z" fill="#CEBCB0"/>
                        <path d="M330.761 11.9922H332.769L356.707 36.7938V11.9922H359.015V40.6849H357.231L333.092 15.7027V40.6849H330.765V11.9922H330.761Z" fill="#CEBCB0"/>
                        <path d="M385.378 11.9922H387.706V40.6849H385.378V11.9922Z" fill="#CEBCB0"/>
                        <path d="M37.7075 52.6767L12.3051 26.8769L38.768 0L64.1704 25.7998L37.7075 52.6767ZM14.662 26.8769L37.7075 50.2829L61.8134 25.7998L38.768 2.3938L14.662 26.8769Z" fill="#CEBCB0"/>
                        <path d="M25.4024 52.6767L0 26.8769L26.4628 0L51.8652 25.7998L25.4024 52.6767ZM2.35692 26.8769L25.4024 50.2829L49.5083 25.7998L26.4628 2.3938L2.35692 26.8769Z" fill="#CEBCB0"/>
                        <path d="M25.4024 52.6767L0 26.8769L26.4628 0L51.8652 25.7998L25.4024 52.6767ZM2.35692 26.8769L25.4024 50.2829L49.5083 25.7998L26.4628 2.3938L2.35692 26.8769Z" fill="#CEBCB0"/>
                        <path d="M37.958 12.8704L23.3518 27.7051L24.5292 28.9009L39.1353 14.0662L37.958 12.8704Z" fill="#CEBCB0"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_670_344">
                        <rect width="388" height="63.9594" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>CRECI - {data[0]?.configs[0]?.description}</p>
                </div>
                <div className="footer-address">
                    <div className="footer-label">Endereço</div>
                    <p>{data[0]?.configs[1]?.description}</p>
                    {/* <p>{data.address2}</p> */}
                </div>
                <div className="contact">
                    <div className="footer-label">Contato</div>
                    <p className="footer-phone">{data[0]?.configs[2]?.description}</p>
                    <p className="footer-instagram">
                        <Link
                            href={`https://instagram.com/${data[0]?.configs[5]?.description}`}
                            target="_blank"
                        >
                            <IoLogoInstagram />{data[0]?.configs[5]?.description}
                        </Link>
                    </p>
                </div>
                <div className="menu">
                    <ul>
                        {menu1?.map((item, index) => (
                            <li key={index}><Link href={'./../' + item.link.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || ''}>{item.name_pt_br}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="menu">
                    <ul>
                        {menu2?.map((item, index) => (
                            <li key={index}><Link href={'./../regioes?page=1&region=' + encodeURIComponent(item.link) || ''}>{item.name_pt_br}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                <p>© GEMINNI IMÓVEIS. TODOS OS DIREITOS RESERVADOS.</p>
                <p>{`PRIVACIDADE E SEGURANÇA.\n DESENVOLVIDO POR`}<span className="ml-2"><ImpacteIcon color="fill-white"/></span></p>
            </div>
        </div>
    )
}