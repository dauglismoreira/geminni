import './styles.css';

interface ButtonCard {
    color:string;
    hover:string;
    text:string;
    action:() => void;
}

export const ActionButton = ({color, hover, text, action}: ButtonCard) => {

    return(
        text &&
            <button
                className={`primary-button ${color} ${hover}`}
                onClick={action}
            >{text}</button>
    )
}