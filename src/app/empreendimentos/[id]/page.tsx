import './styles.css'
import {enterprise, relatedProperties} from './mock'
import PriceContainer from '@/app/components/priceContainer';
import SingleEnterpriseCarousel from '@/app/components/singleEnterpriseCarousel';
import RelatedProperties from '@/app/components/relatedPropertiesCarousel';
import EnterpriseTitle from '@/app/sections/enterpriseTitle';
import EnterpriseSkills from '@/app/sections/enterpriseSkills';
import EnterprisePlant from '@/app/sections/enterprisePlant';
import EnterpriseTour from '@/app/sections/enterpriseTour';
import EnterpriseVideo from '@/app/sections/enterpriseVideo';
import EnterpriseConstructionSkills from '@/app/sections/enterpriseConstructionSkills';
import EnterpriseLocal from '@/app/sections/enterpriseLocal';
import EnterpriseContact from '@/app/sections/enterpriseContact';
import AnchorMenu from '@/app/components/anchorMenu';

export default function Enterprise() {

  return (
    <main>
        <div className="enterprise-container">
            <div id="imagens"><SingleEnterpriseCarousel gallery={enterprise.gallery}/></div>
            <div className="enterprise-anchor">
                <AnchorMenu/>
            </div>
            <div className="enterprise-content">
                <div className="enterprise">
                    <div className="enterprise-body">
                        <EnterpriseTitle enterprise={enterprise}/>
                        <div id="caracteristicas"><EnterpriseSkills enterprise={enterprise}/></div>
                        <div id="planta"><EnterprisePlant enterprise={enterprise}/></div>
                        <div id="tour"><EnterpriseTour enterprise={enterprise}/></div>
                        <div id="video"><EnterpriseVideo enterprise={enterprise}/></div>
                        <div id="emprendimento"><EnterpriseConstructionSkills enterprise={enterprise}/></div>
                        <div id="localizacao"><EnterpriseLocal enterprise={enterprise}/></div>
                        <EnterpriseContact enterprise={enterprise}/>
                    </div>
                    <div className="enterprise-sidebar">
                        <PriceContainer enterprise={enterprise}/>
                    </div>
                </div>
                <div className="carousel-container">
                    <RelatedProperties title="Na mesma região" relatedProperties={relatedProperties}/>
                </div>
            </div>
        </div>
    </main>
  )
}
