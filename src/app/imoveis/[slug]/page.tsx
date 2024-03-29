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
import getStorageFile from '@/app/helpers/getStorageFile';
import fetchData from '@/app/helpers/fetchData';

export async function generateMetadata(context: any) {
  const data = await fetchData(`property/${context.params.slug}`)

  return {
    title: data?.data?.property?.name_seo_pt_br ?? '',
    description: data?.data?.property?.description_seo_pt_br ?? '',
    openGraph: {
      title: data?.data?.property?.name_seo_pt_br ?? '',
      description: data?.data?.property?.description_seo_pt_br ?? '',
      images: [{
        url: getStorageFile(data?.data?.property?.image_primary?.src) ?? '',
        width: 1200,
        height: 630,
      }]
    },
    twitter: {
      // @ts-ignore
      image: getStorageFile(data?.data?.property?.image_primary?.src) ?? ''
    },
  }
}

export default async function Enterprise(context: any) {
  const data = await fetchData(`property/${context.params.slug}`)
  const configs = await fetchData(`configs`)

  return (
    <main>
      <div className="enterprise-container">
        <div id="imagens"><SingleEnterpriseCarousel gallery={data.data?.property?.gallery_primary?.images}/></div>
        <div className="enterprise-anchor">
          <AnchorMenu/>
        </div>
        <div className="enterprise-content">
          <div className="enterprise">
            <div className="enterprise-body">
              <EnterpriseTitle data={data.data?.property}/>
              <div id="caracteristicas"><EnterpriseSkills data={data.data?.property?.enumeration?.items}
                                                          description={data.data?.property?.description_pt_br}/></div>
              <div id="planta"><EnterprisePlant data={data.data?.property?.gallery_plant?.images}/></div>
              <div id="tour"><EnterpriseTour data={data.data?.property?.tour_iframe}/></div>
              <div id="video"><EnterpriseVideo data={data.data?.property?.video}/></div>
              <div id="emprendimento"><EnterpriseConstructionSkills data={data.data?.property?.enterprise}/></div>
              <div id="localizacao"><EnterpriseLocal
                nearby={data.data?.property?.enumeration_nearby?.items}
                data={data.data?.property?.address}
              /></div>
              <EnterpriseContact
                enterprise={enterprise}
                accept={configs.data[0].configs[6]}
                origin_page={data.data?.property?.name_pt_br}
                department={configs.data[0].configs[4].description}
                property_id={data.data?.property?.id}
                recapKey={configs.data[0].configs[7].description}
              />
            </div>
            <div className="enterprise-sidebar">
              <PriceContainer configs={configs} data={data.data?.property}/>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <RelatedProperties title="Na mesma região" id={data.data?.property?.id}/>
        </div>
      </div>
    </main>
  )
}
