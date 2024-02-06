import ContactForm from '@/app/components/contactForm';
import './styles.css'

interface EnterpriseContactProps{
    enterprise:{
        id:number;
    };
    accept:any;
    property_id:number;
    department:string;
    origin_page:string;
    recapKey?:string
}

export default function EnterpriseContact({recapKey, enterprise, accept, property_id, department, origin_page}: EnterpriseContactProps) {

    return (
        <div className="enterprise-form-container">
            <h3>Tem interesse neste imóvel?</h3>
            <p>Preencha os dados que em breve um consultor especialista entrará em cotato.</p>
            <div className="enterprise-form-container">
                <ContactForm
                    origin_page={origin_page}
                    department={department}
                    property_id={property_id}
                    accept={accept}
                    id={enterprise.id}
                    recapKey={recapKey}
                    style={'secondary'}
                />
            </div>
        </div>
    )
}
