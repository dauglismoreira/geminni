import { IoLogoInstagram } from "react-icons/io5";
import './styles.css'
import Link from "next/link";

interface ContactHeaderProps{
    data:{
        name_pt_br:string;
    };
    info:any;
}

export default function ContactHeader({data, info}: ContactHeaderProps) {

  return (
    <>
        <div className="contact-title">
            <h1>{data?.name_pt_br}</h1>
        </div>
        <div className="contact-info">
            <div className="contact-address">
                <label>Endereço</label>
                <p>{info[1].description}</p>
            </div>
            <div className="contact-phone">
                <label>Contato</label>
                <p className="phone">{info[2].description}</p>
                <p>email</p>
            </div>
            <div className="contact-instagram">
                <Link href={`https://instagram.com/${info[3].description}`} target="_blank"><IoLogoInstagram />{info[3].description}</Link>
            </div>
        </div>
    </>
  )
}
