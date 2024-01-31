import './styles.css'
import {post, relatedProperties} from './mock'
import { PropertyCard } from '@/app/components/propertyCard'
import { MdOutlineContentCopy, MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'
import 'swiper/css';
import 'swiper/css/navigation';
import RelatedProperties from '@/app/components/relatedPropertiesCarousel';

export default function Post() {

  return (
    <main>
        <div className="post-container">
            <div className="post-content">
                <div className="post-city">
                    <h3>{post.city}</h3>
                </div>
                <div className="post">
                    <div className="post-body">
                        <h1>{post.title}</h1>
                        <div
                            style={{backgroundImage:`url("${post.image}")`}}
                            className="post-image">
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        <div className="share-container">
                            <p>Compartilhamento</p>
                            <MdOutlineContentCopy />
                            <MdOutlineEmail />
                            <MdOutlineWhatsapp />
                        </div>
                    </div>
                    <div className="post-sidebar">
                        <h4>O destaque da região</h4>
                        <PropertyCard data={post.highProperty}/>
                    </div>
                </div>
                <div className="carousel-container">
                    {/* <RelatedProperties title="Imóveis próximos a região" relatedProperties={relatedProperties}/> */}
                </div>
            </div>
        </div>
    </main>
  )
}
