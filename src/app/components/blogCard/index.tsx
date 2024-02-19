import getStorageFile from '@/app/helpers/getStorageFile';
import { LinkButton } from '../linkButton';
import './styles.css';
import Link from 'next/link';

interface BlogCard {
    data?:any;
}

export const BlogCard = ({data}: BlogCard) => {

    return(
        <Link className="card-container" href={`/regioes/${data.slug_pt_br}`}>
            <div className="card-image" style={{
                backgroundImage: `url("${data.square_image?.src ? getStorageFile(data.square_image?.src) : '/placeholder.jpg'}")`
            }}>
            </div>
            <div className="card-info">
                {data.region ? <h3>{data.region.name}</h3> : <h3>{data.name_pt_br}</h3>}
                <p>{data.resume_pt_br}</p>
                <div className="card-footer">
                    <LinkButton
                        text="Ler mais"
                        // link={`/regioes/${data.slug_pt_br}`}
                        color={`bg-white text-primary border-primary`}
                        hover={`hover:bg-primary hover:text-white`}
                    />
                </div>
            </div>
        </Link>
    )
}