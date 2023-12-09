import {form, contactPage} from './mock';
import './styles.css'
import ContactForm from '../components/contactForm';
import ContactHeader from '../sections/contactHeader';

export default function Contact() {
  return (
    <main>
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-content">
            <ContactHeader contactPage={contactPage}/>
            <div className="contact-form">
              <div className="contact-form-title">
                <h3>{contactPage?.sub_title}</h3>
              </div>
              <p>{contactPage?.text}</p>
              <ContactForm data={form}/>
            </div>
          </div>
          <div className="contact-slogan-container">
            <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_214_1497)">
              <path d="M45.19 0L38.0182 7.17184L30.8463 0L0 30.8463L29.6107 60.457L36.7825 53.2851L43.9543 60.457L74.8007 29.6107L45.19 0ZM29.6107 57.7099L2.74703 30.8463L30.8463 2.74703L36.6443 8.54506L14.3431 30.8463L35.4087 51.9119L29.6107 57.7099ZM38.1557 51.9119L60.457 29.6107L44.9281 14.0818L43.5549 15.455L43.5573 15.4574L27.2174 31.7978L28.5907 33.171L44.9311 16.8306L57.7105 29.6101L36.7825 50.5381L17.0907 30.8463L37.4361 10.501H37.4355L40.1453 7.78997H40.1459L45.19 2.74643L72.0536 29.6101L43.9537 57.7099L38.1557 51.9119Z" fill="#CEBCB0"/>
              </g>
              <defs>
              <clipPath id="clip0_214_1497">
              <rect width="74.8" height="60.457" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <div className="contact-slogan">
              <span className="line"></span>
              <p>{contactPage?.slogan}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-container">

      </div>
    </main>
  )
}
