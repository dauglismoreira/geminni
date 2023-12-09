import { HighSection } from "./sections/highSection";
import { SearchBar } from "./components/searchBar";
import { BannerVerticalSlide } from "./components/verticalBannerSlide";
import {images} from './components/verticalBannerSlide/mock';
import {properties,
  sellBanner,
  highSection,
  searchButtons,
  contactBanner,
  filterButtons,
  propertiesRegion,
  propertiesMore,
  otherPropertiesSection,
  blogSection,
  blogSectionContent,} from './mock';
import { BannerSection } from "./sections/bannerSection";
import { PropertiesSection } from "./sections/propertiesSection";
import { BlogSection } from "./sections/BlogSection";

export default function Home() {
  return (
    <main>
      <BannerVerticalSlide
        autoPlayTime={5000}
        auto={true}
        images={images}/>
      <SearchBar data={searchButtons}/>
      <HighSection data={properties} title={highSection}/>
      <BannerSection data={sellBanner}/>
      <PropertiesSection data={propertiesRegion} title={highSection} filterButtons={filterButtons}/>
      <BannerSection data={contactBanner}/>
      <PropertiesSection data={propertiesMore} title={otherPropertiesSection}/>
      <BlogSection data={blogSectionContent} title={blogSection}/>
    </main>
  )
}
