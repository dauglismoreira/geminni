import './styles.css';

interface SectionContainerProps {
    title:{
        name_pt_br:string;
        link_label_pt_br?: string;
        link?:string;
    };
    color?:string;
    hover?:string;
    border?:string
    link?:string
    noPad?:boolean
}

export const SectionTitle = ({ title, noPad, link, color, border, hover }: SectionContainerProps) => {

    return (
        <div className={`section-title-container ${color} ${border} ${noPad ?  'mx-4 lg:mx-0 max-margin' : 'mx-0'}`}>
            <h3 className={`${color}`}>{title?.name_pt_br}</h3>
            {(title?.link_label_pt_br && title?.link) &&
            <span
                className={`${color} ${border} hover:${hover} hidden lg:block`}
            ><a href={title?.link}>{title?.link_label_pt_br}</a></span>
            }
        </div>
    );
};