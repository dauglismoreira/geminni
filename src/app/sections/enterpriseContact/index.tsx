import ContactForm from '@/app/components/contactForm';
import './styles.css'

interface EnterpriseContactProps{
    enterprise:{
        id:number;
    };
    accept:any;
}

export default function EnterpriseContact({enterprise, accept}: EnterpriseContactProps) {

    return (
        <div className="enterprise-form-container">
            <h3>Tem interesse neste imóvel?</h3>
            <p>Preencha os dados que em breve um consultor especialista entrará em cotato.</p>
            <div className="enterprise-form-container">
                <ContactForm accept={accept} id={enterprise.id} style={'secondary'}/>
            </div>
        </div>
    )
}
