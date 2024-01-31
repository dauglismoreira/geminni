import './styles.css';

interface AboutBannerProps{
    title:{
        name_pt_br:string;
    }
    highImage:string;
}

export const AboutBanner = ({ title, highImage }: AboutBannerProps) => (
    <div
        className="about-banner"
        style={{backgroundImage:`url("${highImage}")`}}
    >
        <h1>{title.name_pt_br}</h1>
        <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_200_741)">
        <path d="M45.19 0L38.0182 7.17184L30.8463 0L0 30.8463L29.6107 60.457L36.7825 53.2851L43.9543 60.457L74.8007 29.6107L45.19 0ZM29.6107 57.7099L2.74703 30.8463L30.8463 2.74703L36.6443 8.54506L14.3431 30.8463L35.4087 51.9119L29.6107 57.7099ZM38.1557 51.9119L60.457 29.6107L44.9281 14.0818L43.5549 15.455L43.5573 15.4574L27.2174 31.7978L28.5907 33.171L44.9311 16.8306L57.7105 29.6101L36.7825 50.5381L17.0907 30.8463L37.4361 10.501H37.4355L40.1453 7.78997H40.1459L45.19 2.74643L72.0536 29.6101L43.9537 57.7099L38.1557 51.9119Z" fill="#CEBCB0"/>
        </g>
        <defs>
        <clipPath id="clip0_200_741">
        <rect width="74.8" height="60.457" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        <div className="vertical-line"></div>
    </div>
);