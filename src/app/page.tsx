import { HighSection } from "./sections/highSection";
import { SearchBar } from "./components/searchBar";
import { BannerVerticalSlide } from "./components/verticalBannerSlide";
import {searchButtons} from './mock';
import { BannerSection } from "./sections/bannerSection";
import { PropertiesSection } from "./sections/propertiesSection";
import { BlogSection } from "./sections/BlogSection";
import getStorageFile from '@/app/helpers/getStorageFile';
import fetchData from "@/app/helpers/fetchData";
import Dump from "@/app/components/impacte/Dump";

export async function generateMetadata() {
  const data = await  fetchData('home')

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
        twitter: {
          image: getStorageFile(data?.data?.square_image?.src) ?? ''
        },
    }
  }

export default async function Home() {
  const data = await fetchData('home')
  const configs = await fetchData('configs')
  const propertiesHigh = await fetchData('property?page=1&highlight=1')
  const propertiesFacingSea = await fetchData(`property?page&localization_type=${encodeURIComponent('Frente mar')}`)
  const properties = await fetchData('property')
  const phone = configs.data[0]?.configs.filter((item: { key: string }) => item.key === 'phone')[0]?.description

  return (
    <main>
      <BannerVerticalSlide
        autoPlayTime={5000}
        auto={true}
        images={data.data.components[0].gallery_image?.images}/>
      <SearchBar
        data={configs.data}
      />
      <HighSection
        noPad={true}
        data={propertiesHigh.data.properties.data}
        title={data.data.components[1]}
      />
      <BannerSection
        phone={phone}
        data={data.data.components[2]}/>
      <PropertiesSection
        noPad={true}
        data={propertiesFacingSea.data.properties.data}
        title={data.data.components[3]}
        buttons={configs.data[1].configs.filter((item:any) => item.key === 'regions')[0]?.enumeration.items}
      />
      <BannerSection
        phone={phone}
        data={data.data.components[4]}
      />
      <PropertiesSection
        noPad={true}
        data={properties.data.properties.data}
        title={data.data.components[5]}
      />
      <BlogSection
        noPad={true}
        buttons={data.data.components[6]?.enumeration?.items}
        data={data.data.components[6]}
      />
    </main>
  )
}
