import './styles.css'
import {properties} from './mock'
import { PropertyCard } from '../components/propertyCard';
import FullFilters from '../components/fullFilters';

export default function Enterprises() {
  return (
    <main>
        <div className="enterprise-container">
            <div className="enterprise-content">
                <div className="enterprise-title">
                    <h1>Os melhores imóveis para você</h1>
                    <span className="line"></span>
                </div>
                <div className="enterprise-search-bar">
                    <FullFilters/>
                </div>
                <div className="enterprise-search-list">
                    {properties.map((post, index) => (
                        <PropertyCard key={index} data={post}/>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}
