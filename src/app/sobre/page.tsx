import {about} from './mock';
import './styles.css'
import { AboutBanner } from '../sections/aboutBanner';
import { AboutContent } from '../sections/aboutContent';
import { AboutVideo } from '../sections/aboutVideo';
import { AboutPosts } from '../sections/aboutPosts';
import getStorageFile from '../helpers/getStorageFile';
import fetchData from '../helpers/fetchData';

export async function generateMetadata() {
  const data = await  fetchData('about')

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

export default async function About() {
  const data = await  fetchData('about')

  return (
    <main>
        <AboutBanner
          title={data.data.components[0]}
          highImage={getStorageFile(data.data.components[0]?.horizontal_image?.src)}
        />
        <AboutContent content={data.data.components[1]?.long_text_pt_br}/>
        <AboutVideo iframeVideo={data.data.components[2].horizontal_video?.src}/>
        <AboutPosts subtitle={data.data.components[3]} blogCards={about.blogCards}/>
    </main>
  )
}
