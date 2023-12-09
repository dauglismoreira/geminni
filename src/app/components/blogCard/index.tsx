import { LinkButton } from '../linkButton';
import './styles.css';

interface BlogCard {
    data?:any;
}

export const BlogCard = ({data}: BlogCard) => {

    return(
        <div className="card-container">
            <div className="card-image" style={{
                backgroundImage: `url("${data.image}")`
            }}>
            </div>
            <div className="card-info">
                <h3>{data.city}</h3>
                <p>{data.description}</p>
                <div className="card-footer">
                    <LinkButton
                        text="Ler mais"
                        link="#"
                        color={`bg-white text-primary border-primary`}
                        hover={`hover:bg-primary hover:text-white`}
                    />
                </div>
            </div>
        </div>
    )
}