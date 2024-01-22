import { LinkButton } from '../linkButton';
import './styles.css';

interface PropertyHighCard {
    data?:any;
}

export const PropertyHighCard = ({data}: PropertyHighCard) => {

    return(
        <div className="card-high-container">
            <div className="card-high-image" style={{
                backgroundImage: `url("${data.image}")`
            }}></div>
            <div className="card-high-info">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4995 0L12.1983 2.30112L9.89721 0L0 9.89721L9.50074 19.3979L11.8019 17.0968L14.103 19.3979L24.0002 9.50074L14.4995 0ZM9.50074 18.5165L0.881401 9.89721L9.89721 0.881401L11.7575 2.74173L4.60206 9.89721L11.3611 16.6562L9.50074 18.5165ZM12.2425 16.6562L19.3979 9.50074L14.4154 4.51821L13.9748 4.95882L13.9756 4.95959L8.73286 10.2025L9.17347 10.6431L14.4164 5.40019L18.5167 9.50055L11.8019 16.2154L5.48365 9.89721L12.0116 3.36929H12.0114L12.8808 2.49945H12.881L14.4995 0.881208L23.1188 9.50055L14.1028 18.5165L12.2425 16.6562Z" fill="#3C2222"/>
            </svg>
                <h4>{data.subtitle}</h4>
                <h3>{data.title}</h3>
                <div className="container-high-details">
                    <span>{data.details.size} m²</span>
                    <span>{data.details.bedrooms} dorm</span>
                    <span>{data.details.suites} suíte</span>
                    <span>{data.details.garages} vagas</span>
                </div>
                <h5>{data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                <div className="card-high-footer">
                    <LinkButton
                        text="Detalhes"
                        link="#"
                        color={`bg-soft text-white`}
                        hover={`hover:bg-white hover:text-soft`}
                    />
                    <span>Cód. {data.cod}</span>
                </div>
            </div>
        </div>
    )
}