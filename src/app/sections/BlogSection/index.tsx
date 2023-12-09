import { SectionContainer } from '../../components/sectionContainer';
import { HiArrowLongRight } from "react-icons/hi2";
import './styles.css';

interface BlogSectionProps {
    data?:any;
    title:{
        title:string;
        link?: string;
        linkText?:string;
    };
}

export const BlogSection = ({data, title}: BlogSectionProps) => {

    return(
        <>
        <SectionContainer
            extraClass={"-mt-8"}
            title={title}
            color={"primary"}
            hover={"light"}
            bg={'bg-ultralight'}
        >
            <div className="region-blog">
                <div className="regions-list">
                    <p>Fique por dentro de tudo que acontece nas regiões que escolhemos investir.</p>
                    {data.regions.map((region: any, index: number) => (
                        <span key={index}>{region.label}<HiArrowLongRight /></span>
                    ))}
                </div>
                <div
                    className="region-image"
                    style={{
                        backgroundImage:`url("${data.image}")`
                    }}
                ></div>
            </div>
        </SectionContainer>
        <div className="region-blog-footer">
            <svg className="svg-bg-detail" width="825" height="851" viewBox="0 0 825 851" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M407.976 0L307.044 100.932L206.112 0L-228 434.112L188.722 850.834L289.654 749.902L390.587 850.834L824.699 416.722L407.976 0ZM188.722 812.174L-189.34 434.112L206.112 38.6601L287.71 120.258L-26.1442 434.112L270.32 730.576L188.722 812.174ZM308.98 730.576L622.834 416.722L404.29 198.178L384.965 217.504L384.998 217.538L155.042 447.503L174.367 466.829L404.333 236.864L584.183 416.714L289.654 711.242L12.5243 434.112L298.852 147.784H298.844L336.98 109.631H336.988L407.976 38.6516L786.039 416.714L390.578 812.174L308.98 730.576Z" fill="#987F6A"/>
            </svg>
            <div className="slogan">
                <svg width="76" height="61" viewBox="0 0 76 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.0185 0L38.8466 7.17184L31.6748 0L0.828491 30.8463L30.4391 60.457L37.611 53.2851L44.7828 60.457L75.6291 29.6107L46.0185 0ZM30.4391 57.7099L3.57553 30.8463L31.6748 2.74703L37.4728 8.54506L15.1716 30.8463L36.2372 51.9119L30.4391 57.7099ZM38.9842 51.9119L61.2855 29.6107L45.7566 14.0818L44.3834 15.455L44.3858 15.4574L28.0459 31.7978L29.4191 33.171L45.7596 16.8306L58.539 29.6101L37.611 50.5381L17.9192 30.8463L38.2646 10.501H38.264L40.9738 7.78997H40.9743L46.0185 2.74643L72.8821 29.6101L44.7822 57.7099L38.9842 51.9119Z" fill="#987F6A"/>
                </svg>
                <h2>Em sintonia com o seu destino.</h2>
            </div>
        </div>
        </>
    )
}