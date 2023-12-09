import {about} from './mock';
import './styles.css'
import { AboutBanner } from '../sections/aboutBanner';
import { AboutContent } from '../sections/aboutContent';
import { AboutVideo } from '../sections/aboutVideo';
import { AboutPosts } from '../sections/aboutPosts';

export default function About() {


  return (
    <main>
        <AboutBanner title={about.title} highImage={about.high_image} />
        <AboutContent content={about.content}/>
        <AboutVideo iframeVideo={about.ifram_video}/>
        <AboutPosts subtitle={about.subtitle} blogCards={about.blogCards}/>
    </main>
  )
}
