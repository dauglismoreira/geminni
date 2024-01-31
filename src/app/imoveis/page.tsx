import './styles.css'
import fetchData from '../helpers/fetchData';
import getStorageFile from '../helpers/getStorageFile';
import Properties from '../components/propertiesList';

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

export default async function Enterprises(context: any) {
    if (typeof context.searchParams === 'object' && context.searchParams !== null) {
      const queryParams = Object.entries(context.searchParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
        .join('&');
    const data = await  fetchData(`property?${queryParams}`)
    const configs = await fetchData('configs')

  return (
    <main>
        <div className="enterprise-container">
            <div className="enterprise-content">
                <div className="enterprise-title">
                    <h1>Os melhores imóveis para você</h1>
                    <span className="line"></span>
                </div>
                <Properties
                  data={data}
                  configs={configs}
                />
            </div>
        </div>
    </main>
  )
  } else {
    return null;
  }
}
