import { LinkButton } from '@/app/components/linkButton';
import './styles.css';

interface BannerSectionProps {
    data?:any;
}

export const BannerSection = ({data}: BannerSectionProps) => {

    return(
        <div className="banner-section-container" style={{
            backgroundImage:`url("${data?.image}")`
        }}>
            <div className="overlay"></div>
            <div className="content">
                <h3>{data.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            <LinkButton
                color={`transparent text-white`}
                hover={`hover:bg-primary hover:text-white`}
                text={data.button}
                link={data.link}
                extraClasse={`w-full`}
            />
        </div>
    )
}