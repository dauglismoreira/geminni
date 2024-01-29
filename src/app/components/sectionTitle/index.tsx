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
}

export const SectionTitle = ({ title, color, border, hover }: SectionContainerProps) => {
    return (
        <div className={`section-title-container ${color} ${border}`}>
            <h3 className={`${color}`}>{title?.name_pt_br}</h3>
            {title?.link_label_pt_br &&
            <span
                className={`${color} ${border} hover:${hover} hidden lg:block`}
            ><a href={title?.link}>{title?.link_label_pt_br}</a></span>
            }
        </div>
    );
};