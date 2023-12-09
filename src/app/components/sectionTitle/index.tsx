import './styles.css';

interface SectionContainerProps {
    title:{
        title:string;
        link?: string;
        linkText?:string;
    };
    color?:string;
    hover?:string;
}

export const SectionTitle = ({ title, color, hover }: SectionContainerProps) => {
    return (
        <div className={`section-title-container border-${color}`}>
            <h3 className={`text-${color}`}>{title.title}</h3>
            {title.linkText &&
            <span
                className={`text-${color} border-${color} hover:text-${hover} hidden lg:block`}
            >{title.linkText}</span>
            }
        </div>
    );
};