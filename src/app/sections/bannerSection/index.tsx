import { LinkButton } from '@/app/components/linkButton';
import './styles.css';
import getStorageFile from '@/app/helpers/getStorageFile';
import {ChatWhatsapp} from "@/app/components/chatWhatsapp";

interface BannerSectionProps {
    data?:any;
    phone?: string
}

export const BannerSection = ({data, phone}: BannerSectionProps) => {

    return(
        <div className="banner-section-container" style={{
            backgroundImage:`url("${getStorageFile(data?.horizontal_image?.src)}")`
        }}>
            <div className="overlay"></div>
            <div className="content">
                <h3>{data?.name_pt_br}</h3>
                <div dangerouslySetInnerHTML={{ __html: data?.long_text_pt_br || '' }} />
            </div>

            {phone && data?.link_label_pt_br &&
              <div className="z-10">
                  <ChatWhatsapp.Link phone={phone}>
                      <div className="border py-2 px-4 lg:px-8 text-base transition lg:w-auto font-novelinBold transparent text-white hover:bg-primary hover:text-white">
                          {data?.link_label_pt_br}
                      </div>
                  </ChatWhatsapp.Link>
              </div>
            }

            {data?.link_label_pt_br && (!phone) && <LinkButton
                color={`transparent text-white`}
                hover={`hover:bg-primary hover:text-white`}
                text={data?.link_label_pt_br}
                link={data?.link || '#'}
                extraClasse={`w-full`}
            />}
        </div>
    )
}