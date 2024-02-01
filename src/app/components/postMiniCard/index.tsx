import getStorageFile from '@/app/helpers/getStorageFile';
import { LinkButton } from '../linkButton';
import './styles.css';

interface PostCard {
    data?:any;
}

export const PostMiniCard = ({data}: PostCard) => {

    return(
        <div className="card-mini-container">
            <div className="card-mini-image" style={{
                backgroundImage: `url("${getStorageFile(data.square_image?.src)}")`
            }}>
            </div>
            <div className="card-mini-info">
                <h3>{data.title_pt_br}</h3>
                <p>{data.resume_pt_br}</p>
                <div className="card-mini-footer">
                    <LinkButton
                        text="Detalhes"
                        link={`/regioes/${data?.slug_pt_br}`}
                        color={`text-primary`}
                        hover={`hover:text-soft`}
                    />
                </div>
            </div>
        </div>
    )
}