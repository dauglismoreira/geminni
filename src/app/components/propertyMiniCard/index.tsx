import getStorageFile from '@/app/helpers/getStorageFile';
import { LinkButton } from '../linkButton';
import './styles.css';

interface PropertyCard {
    data?:any;
}

export const PropertyMiniCard = ({data}: PropertyCard) => {

    return(
        <div className="card-mini-container">
            <div className="card-mini-image" style={{
                backgroundImage: `url("${getStorageFile(data.image_primary?.src)}")`
            }}>
            </div>
            <div className="card-mini-info">
                <h3>{data.name_pt_br}</h3>
                <h5>{parseFloat(data.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                <div className="card-mini-footer">
                    <LinkButton
                        text="Detalhes"
                        link={`/imoveis/${data?.slug_pt_br}`}
                        color={`text-primary`}
                        hover={`hover:text-soft`}
                    />
                </div>
            </div>
        </div>
    )
}