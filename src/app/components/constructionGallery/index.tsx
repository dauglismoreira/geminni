'use client';

import './styles.css'
import { IoImageOutline } from 'react-icons/io5';
import Fancybox from '@/app/utils/Fancybox'

interface ConstructionGalleryProps{
    gallery:{
        src:string;
        alt_pt_br?:string
    }[]
}

export default function ConstructionGallery({gallery}: ConstructionGalleryProps) {

    const limitedGallery = gallery.slice(0, 6);

    return (
        <div className="gallery-container">
            <div className="gallery">
                {limitedGallery.map((photo, index) => (
                    <Fancybox
                        key={index}
                        options={{ infinite: false }}
                        href={photo.src}
                        delegate="[data-fancybox='gallery']"
                    >
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            src={photo.src}
                            data-fancybox="gallery"
                            data-src={photo.src}
                            alt={photo.alt_pt_br}
                        />
                    </Fancybox>
                ))}
            </div>
            <button data-fancybox="gallery" data-src={limitedGallery[0].src}><IoImageOutline />Mais fotos</button>
        </div>
    )
}
