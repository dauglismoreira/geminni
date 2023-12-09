import ContactForm from '@/app/components/contactForm';
import './styles.css'

interface EnterpriseContactProps{
    enterprise:{
        id:number;
    }
}

export default function EnterpriseContact({enterprise}: EnterpriseContactProps) {

    return (
        <div className="enterprise-form-container">
            <h3>Tem interesse neste imóvel?</h3>
            <p>Preencha os dados que em breve um consultor especialista entrará em cotato.</p>
            <div className="enterprise-form-container">
                <ContactForm id={enterprise.id} style={'secondary'}/>
            </div>
        </div>
    )
}
