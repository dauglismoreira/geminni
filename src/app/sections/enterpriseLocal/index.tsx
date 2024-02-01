import './styles.css'
import { IoMdCheckmark } from "react-icons/io";

interface EnterpriseLocalProps{
    data:any,
    nearby:{
        name_pt_br:string;
    }[]
}

export default function EnterpriseLocal({data, nearby}: EnterpriseLocalProps) {

    return (
        <div className="enterprise-local-container">
            <h3>Localização</h3>
            <p>{data?.street}, {data?.number}, {data?.city?.name}, {data?.state?.acronym}</p>
            <div className="container-local-map">
                <div dangerouslySetInnerHTML={{ __html: data?.map_iframe ? data?.map_iframe : '' }} />
            </div>
            {(nearby?.length > 0 || data?.place) && <div className="enterprise-place">
                <h5>Proximidades</h5>
                <p>{data?.place}</p>
            </div>}
            <div className="enterprise-places">
                {nearby && nearby.map((place, index) => (
                    <span key={index}><IoMdCheckmark />{place?.name_pt_br}</span>
                ))}
            </div>
        </div>
    )
}