import './styles.css'
import { IoMdCheckmark } from "react-icons/io";

interface EnterpriseLocalProps{
    enterprise:{
        skills:string[];
        content:string;
        place:string;
        places:string[];
        address:string;
        map:string;
    }
}

export default function EnterpriseLocal({enterprise}: EnterpriseLocalProps) {

    return (
        <div className="enterprise-local-container">
            <h3>Localização</h3>
            <p>{enterprise.address}</p>
            <div className="container-local-map">
                <div dangerouslySetInnerHTML={{ __html: enterprise.map }} />
            </div>
            <div className="enterprise-place">
                <h5>Proximidades</h5>
                <p>{enterprise.place}</p>
            </div>
            <div className="enterprise-places">
                {enterprise.places.map((place, index) => (
                    <span key={index}><IoMdCheckmark />{place}</span>
                ))}
            </div>

        </div>
    )
}
