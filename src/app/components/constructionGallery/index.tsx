'use client';

import './styles.css'
import { IoImageOutline } from 'react-icons/io5';
import Fancybox from '@/app/utils/Fancybox'

interface ConstructionGalleryProps{
    gallery:{
        image:string;
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
                        href={photo.image}
                        delegate="[data-fancybox='gallery']"
                    >
                        <img src={photo.image} data-fancybox="gallery" data-src={photo.image} />
                    </Fancybox>
                ))}
            </div>
            <button data-fancybox="gallery" data-src={limitedGallery[0].image}><IoImageOutline />Mais fotos</button>
        </div>
    )
}
