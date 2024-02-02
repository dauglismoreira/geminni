import './styles.css';

interface ButtonCard {
    color:string;
    hover:string;
    text:string;
    link?:string;
    extraClasse?:string;
    params?:any;
}

export const LinkButton = ({params, color, hover, text, link, extraClasse}: ButtonCard) => {

    return(
        link ?
            <a
                className={`${color} ${hover} ${extraClasse}`}
                href={params ? `${link}?page=1&${params}` : link}
            >
                <button
                    className={`primary-button ${color} ${hover} ${extraClasse}`}
                >
                    {text}
                </button>
            </a>
            :
            <button
                className={`primary-button ${color} ${hover} ${extraClasse}`}
            >
                {text}
            </button>
    )
}