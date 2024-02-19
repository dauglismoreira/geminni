import getStorageFile from '@/app/helpers/getStorageFile';
import { LinkButton } from '../linkButton';
import './styles.css';
import Link from 'next/link';

interface PropertyCard {
    data?:any;
}

export const PropertyCard = ({data}: PropertyCard) => {

    return(
        <Link className="card-container" href={`/imoveis/${data?.slug_pt_br}`}>
            <div className="card-image" style={{
                backgroundImage: `url("${data.image_primary?.src ? getStorageFile(data.image_primary?.src) : '/placeholder.jpg'}")`
            }}>
                {data?.residential_property_status?.name_pt_br && <div className="card-tag">{data?.residential_property_status?.name_pt_br}</div>}
            </div>
            <div className="card-info">
                {data?.residential_property_type?.name_pt_br && <h4>{data?.residential_property_type?.name_pt_br}</h4>}
                <h3>{data.name_pt_br}</h3>
                <div className="container-details">
                    <span>{parseInt(data.util_area)} m²</span>
                    <span>{data.rooms} dorm</span>
                    <span>{data.suites} suíte</span>
                    <span>{data.parking_spaces} vagas</span>
                </div>
                <h5>{parseFloat(data.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
                <div className="card-footer">
                    <LinkButton
                        text="Detalhes"
                        // link={`/imoveis/${data?.slug_pt_br}`}
                        color={`bg-white text-primary border-primary`}
                        hover={`hover:bg-primary hover:text-white`}
                    />
                    <span>Cód. {data.sku}</span>
                </div>
            </div>
        </Link>
    )
}