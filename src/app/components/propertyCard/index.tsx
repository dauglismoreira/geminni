import { LinkButton } from '../linkButton';
import './styles.css';

interface PropertyCard {
    data?:any;
}

export const PropertyCard = ({data}: PropertyCard) => {

    return(
        <div className="card-container">
            <div className="card-image" style={{
                backgroundImage: `url("${data.image}")`
            }}>
                {data.tag && <div className="card-tag">{data.tag}</div>}
            </div>
            <div className="card-info">
                <h4>{data.subtitle}</h4>
                <h3>{data.title}</h3>
                <div className="container-details">
                    <span>{data.details.size} m²</span>
                    <span>{data.details.bedrooms} dorm</span>
                    <span>{data.details.suites} suíte</span>
                    <span>{data.details.garages} vagas</span>
                </div>
                <h5>{data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                <div className="card-footer">
                    <LinkButton
                        text="Detalhes"
                        link="#"
                        color={`bg-white text-primary border-primary`}
                        hover={`hover:bg-primary hover:text-white`}
                    />
                    <span>Cód. {data.cod}</span>
                </div>
            </div>
        </div>
    )
}