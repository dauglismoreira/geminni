import './styles.css';

interface SectionContainerProps {
    title:{
        title:string;
        link?: string;
        linkText?:string;
    };
    color?:string;
    hover?:string;
    border?:string
}

export const SectionTitle = ({ title, color, border, hover }: SectionContainerProps) => {
    return (
        <div className={`section-title-container ${color}`}>
            <h3 className={`${color}`}>{title.title}</h3>
            {title.linkText &&
            <span
                className={`${color} ${border} hover:${hover} hidden lg:block`}
            >{title.linkText}</span>
            }
        </div>
    );
};