import { IoLogoInstagram } from "react-icons/io5";
import './styles.css'

interface ContactHeaderProps{
    contactPage:{
        title:string;
        address1:string;
        address2:string;
        phone:string;
        email:string;
        instagram:string;
    }
}

export default function ContactHeader({contactPage}: ContactHeaderProps) {
  return (
    <>
        <div className="contact-title">
            <h1>{contactPage?.title}</h1>
        </div>
        <div className="contact-info">
            <div className="contact-address">
            <label>Endereço</label>
            <p>{contactPage?.address1}</p>
            <p>{contactPage?.address2}</p>
            </div>
            <div className="contact-phone">
            <label>Contato</label>
            <p className="phone">{contactPage?.phone}</p>
            <p>{contactPage?.email}</p>
            </div>
            <div className="contact-instagram">
            <a><IoLogoInstagram />{contactPage?.instagram}</a>
            </div>
        </div>
    </>
  )
}
