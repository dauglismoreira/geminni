import { LinkButton } from '../linkButton';
import './styles.css';

interface PropertyCard {
    data?:any;
}

export const PropertyMiniCard = ({data}: PropertyCard) => {

    return(
        <div className="card-mini-container">
            <div className="card-mini-image" style={{
                backgroundImage: `url("${data.image}")`
            }}>
            </div>
            <div className="card-mini-info">
                <h3>{data.title}</h3>
                <h5>{data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                <div className="card-mini-footer">
                    <LinkButton
                        text="Detalhes"
                        link="#"
                        color={`text-primary`}
                        hover={`hover:text-light`}
                    />
                </div>
            </div>
        </div>
    )
}