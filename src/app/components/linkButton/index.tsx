import './styles.css';

interface ButtonCard {
    color:string;
    hover:string;
    text:string;
    link:string;
    extraClasse?:string;
}

export const LinkButton = ({color, hover, text, link, extraClasse}: ButtonCard) => {

    return(
        text &&
            <button
                className={`primary-button ${color} ${hover} ${extraClasse}`}
                // onClick={link}
            >{text}</button>
    )
}