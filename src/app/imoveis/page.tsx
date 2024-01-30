import './styles.css'
import {properties} from './mock'
import { PropertyCard } from '../components/propertyCard';
import FullFilters from '../components/fullFilters';
import fetchData from '../helpers/fetchData';
import getStorageFile from '../helpers/getStorageFile';

export async function generateMetadata() {
    const data = await  fetchData('property')
  
      return {
        title: data?.data?.page?.name_pt_br ?? '',
        description: data?.data?.page?.description_pt_br ?? '',
          openGraph: {
            title: data?.data?.page?.name_pt_br ?? '',
            description: data?.data?.page?.description_pt_br ?? '',
            images: [{
              url: getStorageFile(data?.data?.page?.square_image?.src) ?? '',
            },]
          },
      }
    }

export default async function Enterprises() {
    const data = await  fetchData('property')
    const configs = await fetchData('configs')

  return (
    <main>
        <div className="enterprise-container">
            <div className="enterprise-content">
                <div className="enterprise-title">
                    <h1>Os melhores imóveis para você</h1>
                    <span className="line"></span>
                </div>
                <div className="enterprise-search-bar">
                    <FullFilters
                      data={configs.data.filter((configs:any) => configs.name === 'Filtro rápido')[0]}
                    />
                </div>
                <div className="enterprise-search-list">
                    {data.data?.properties?.data.map((post:any, index:number) => (
                        <PropertyCard key={index} data={post}/>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}
