import './styles.css'
import {post} from './mock'
import { PropertyCard } from '@/app/components/propertyCard'
import 'swiper/css';
import 'swiper/css/navigation';
import RelatedProperties from '@/app/components/relatedPropertiesCarousel';
import fetchData from '@/app/helpers/fetchData';
import getStorageFile from '@/app/helpers/getStorageFile';
import { ShareIcons } from '@/app/components/shareIcons';

export async function generateMetadata(context: any) {
    const data = await fetchData(`post/${context.params.slug}`)
  
    return {
      title: data?.data?.post?.title_pt_br ?? '',
      description: data?.data?.post?.seo_description_pt_br ?? '',
      openGraph: {
        title: data?.data?.post?.title_pt_br ?? '',
        description: data?.data?.post?.seo_description_pt_br ?? '',
        images: [{
          url: getStorageFile(data?.data?.post?.square_image?.src) ?? '',
        },]
      },
      twitter: {
        // @ts-ignore
        image: getStorageFile(data?.data?.post?.square_image?.src) ?? ''
      },
    }
  }

export default async function Post(context: any) {
    const data = await fetchData(`post/${context.params.slug}`)
    const related = await fetchData(`property/related-property?region_id=${data.data.post.region.id ? data.data.post.region.id : 1}}`)

  return (
    <main>
        <div className="post-container">
            <div className="post-content">
                <div className="post-city">
                    <h3>{data.data.post.region.name}</h3>
                </div>
                <div className="post">
                    <div className="post-body">
                        <h1>{data.data.post.title_pt_br}</h1>
                        <div
                            style={{backgroundImage:`url("${data?.data?.post?.square_image ? getStorageFile(data?.data?.post?.square_image.src) : '/placeholder.jpg'}")`}}
                            className="post-image">
                        </div>
                        {data?.data?.post?.content_pt_br && <div className="post-description" dangerouslySetInnerHTML={{ __html: data?.data?.post?.content_pt_br }} />}
                        <ShareIcons/>
                    </div>
                    <div className="post-sidebar">
                        {related.data.length > 1 && <h4>O destaque da região</h4>}
                        {related.data.length > 1 && <PropertyCard data={related.data[0]}/>}
                    </div>
                </div>
            </div>
            <div className="carousel-container">
                <RelatedProperties
                    title="Imóveis próximos a região"
                    region={data.data.post.region.id}
                />
            </div>
        </div>
    </main>
  )
}
