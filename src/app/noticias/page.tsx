import './styles.css'
import {blogCards} from './mock'
import { BlogCard } from '../components/blogCard'
import BlogFilters from '../components/blogFilters';

export default function News() {
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
