import './styles.css';

interface ButtonCard {
    color:string;
    hover:string;
    text:string;
    link:string;
    extraClasse?:string;
    params?:any;
}

export const LinkButton = ({params, color, hover, text, link, extraClasse}: ButtonCard) => {

    return(
        text &&
            <button
                className={`primary-button ${color} ${hover} ${extraClasse}`}
                // onClick={link}
            ><a href={params ? `${link}?page=1&${params}` : link}>{text}</a></button>
    )
}