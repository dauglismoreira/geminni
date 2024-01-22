import { LinkButton } from './components/linkButton';
import './not-found.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <svg viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{mixBlendMode:"multiply"}}>
                <path d="M1141.98 -759L841.394 -458.517L540.812 -759L-752 533.385L489.024 1774L789.606 1473.52L1090.19 1774L2383 481.615L1141.98 -759ZM489.024 1658.91L-636.868 533.385L540.812 -643.906L783.816 -400.983L-150.861 533.385L732.027 1415.98L489.024 1658.91ZM847.159 1415.98L1781.84 481.615L1131 -169.008L1073.45 -111.473L1073.55 -111.373L388.721 573.252L446.274 630.786L1131.12 -53.8383L1666.73 481.589L789.606 1358.42L-35.704 533.385L816.998 -319.035H816.973L930.544 -432.619H930.569L1141.98 -643.931L2267.87 481.589L1090.16 1658.91L847.159 1415.98Z" fill="url(#paint0_linear_218_1721)" fill-opacity="0.05"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_218_1721" x1="815.5" y1="-759" x2="815.5" y2="1774" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3C2222"/>
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
                </linearGradient>
                </defs>
            </svg>
            <div className="not-found-content">
                <h1>Erro 404</h1>
                <div className="horizontal-line"></div>
                <p>A página que você procura <b>não foi encontrada</b>.</p>
                <div className="container-buttons">
                    <LinkButton
                        text="Volte para o início"
                        link="/"
                        color={`bg-white text-primary border-primary`}
                        hover={`hover:bg-primary hover:text-white`}
                    />
                    <LinkButton
                        text="Veja nossos imóveis"
                        link="/empreendimentos"
                        color={`bg-white text-primary border-primary`}
                        hover={`hover:bg-primary hover:text-white`}
                    />
                </div>
            </div>
        </div>
    )
}
export default NotFound;