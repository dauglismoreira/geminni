import './styles.css'
import fetchData from '../helpers/fetchData';
import getStorageFile from '../helpers/getStorageFile';
import Properties from '../components/propertiesList';

export async function generateMetadata() {
  const data = await fetchData('property')

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
    twitter: {
      // @ts-ignore
      image: getStorageFile(data?.data?.page?.square_image?.src) ?? ''
    },
  }
}

export default async function Enterprises(context: any) {
  const data = await fetchData(`property?${context.searchParams}`)
  const configs = await fetchData('configs')

  return (
    <main>
      <div className="enterprise-container">
        <div className="enterprise-content">
          <div className="enterprise-title">
            <h1>Os melhores imóveis para você</h1>
            <span className="line"></span>
          </div>

          {data && configs &&
            <Properties
              data={data}
              configs={configs}
            />
          }
        </div>
      </div>
    </main>
  )
}
