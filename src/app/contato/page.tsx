import {form, contactPage} from './mock';
import './styles.css'
import ContactForm from '../components/contactForm';
import ContactHeader from '../sections/contactHeader';
import fetchData from '../helpers/fetchData';
import getStorageFile from '../helpers/getStorageFile';

export async function generateMetadata() {
  const data = await  fetchData('contact')

    return {
      title: data?.data?.name_pt_br ?? '',
      description: data?.data?.description_pt_br ?? '',
        openGraph: {
          title: data?.data?.name_pt_br ?? '',
          description: data?.data?.description_pt_br ?? '',
          images: [{
            url: getStorageFile(data?.data?.square_image?.src) ?? '',
          },]
        },
    }
  }

export default async function Contact() {
  const data = await  fetchData('contact')

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
        <svg className="bg-detail" viewBox="0 0 1920 859" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{mixBlendMode:'multiply'}}>
            <path d="M1598.98 -773L1298.39 -472.517L997.812 -773L-295 519.385L946.024 1760L1246.61 1459.52L1547.19 1760L2840 467.615L1598.98 -773ZM946.024 1644.91L-179.868 519.385L997.812 -657.906L1240.82 -414.983L306.139 519.385L1189.03 1401.98L946.024 1644.91ZM1304.16 1401.98L2238.84 467.615L1588 -183.008L1530.45 -125.473L1530.55 -125.373L845.721 559.252L903.274 616.786L1588.12 -67.8383L2123.73 467.589L1246.61 1344.42L421.296 519.385L1274 -333.035H1273.97L1387.54 -446.619H1387.57L1598.98 -657.931L2724.87 467.589L1547.16 1644.91L1304.16 1401.98Z" fill="url(#paint0_linear_206_1185)" fill-opacity="0.25"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_206_1185" x1="1272.5" y1="-773" x2="1272.5" y2="1760" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3C2222"/>
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
      </div>
      <div className="map-container">

      </div>
    </main>
  )
}
