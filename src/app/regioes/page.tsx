import './styles.css'
import fetchData from '../helpers/fetchData';
import getStorageFile from '../helpers/getStorageFile';
import Blog from '../components/blogItems';

export async function generateMetadata() {
    const data = await  fetchData('post')
  
      return {
        title: data.data.page?.name_pt_br ?? '',
        description: data.data.page?.seo_description_pt_br ?? '',
          openGraph: {
            title: data.data.page?.name_pt_br ?? '',
            description: data.data.page?.seo_description_pt_br ?? '',
            images: [{
              url: getStorageFile(data?.data.page?.square_image?.src) ?? '',
            },]
          },
          twitter: {
            image: getStorageFile(data?.data?.page?.square_image?.src) ?? ''
          },
      }
    }

export default async function News(context: any) {
    const data = await fetchData(`post?${context.searchParams}`)
    const configs = await fetchData('configs')

  return (
    <main>
        <div className="news-container">
            <div className="news-content">
                <div className="news-title">
                    <h1>{data.data.page.name_pt_br}</h1>
                    <span className="line"></span>
                    <p>{data.data.page.components[0].name_pt_br}</p>
                </div>
                <Blog
                  data={data}
                  configs={configs}
                />
            </div>
        </div>
    </main>
  )
}
