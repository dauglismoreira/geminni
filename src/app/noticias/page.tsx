import './styles.css'
import {blogCards} from './mock'
import { BlogCard } from '../components/blogCard'
import BlogFilters from '../components/blogFilters';
import fetchData from '../helpers/fetchData';
import getStorageFile from '../helpers/getStorageFile';

export async function generateMetadata() {
    const data = await  fetchData('post')
  
      return {
        title: data?.data?.name_pt_br ?? '',
        description: data?.data?.description_pt_br ?? '',
          openGraph: {
            title: data?.data?.name_pt_br ?? '',
            description: data?.data?.description_pt_br ?? '',
            images: [{
              url: getStorageFile(data?.data?.square_image?.src) ?? '',
            },]
          },
      }
    }

export default async function News() {
    const data = await fetchData('post')

  return (
    <main>
        <div className="news-container">
            <div className="news-content">
                <div className="news-title">
                    <h1>Regiões</h1>
                    <span className="line"></span>
                    <p>Fique por dentro de tudo que acontece nas regiões que escolhemos investir.</p>
                </div>
                <div className="news-search-bar">
                    <BlogFilters/>
                </div>
                <div className="news-search-list">
                    {blogCards.map((post, index) => (
                        <BlogCard key={index} data={post}/>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}
