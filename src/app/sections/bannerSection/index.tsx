import { LinkButton } from '@/app/components/linkButton';
import './styles.css';
import getStorageFile from '@/app/helpers/getStorageFile';

interface BannerSectionProps {
    data?:any;
}

export const BannerSection = ({data}: BannerSectionProps) => {

    return(
        <div className="banner-section-container" style={{
            backgroundImage:`url("${getStorageFile(data?.horizontal_image?.src)}")`
        }}>
            <div className="overlay"></div>
            <div className="content">
                <h3>{data?.name_pt_br}</h3>
                <div dangerouslySetInnerHTML={{ __html: data?.long_text_pt_br || '' }} />
            </div>
            {data?.link_label_pt_br && <LinkButton
                color={`transparent text-white`}
                hover={`hover:bg-primary hover:text-white`}
                text={data?.link_label_pt_br}
                link={data?.link || '#'}
                extraClasse={`w-full`}
            />}
        </div>
    )
}