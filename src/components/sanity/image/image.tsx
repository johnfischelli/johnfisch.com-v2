"use client"

import { createClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true
});

const SanityImage = ({ asset }) => {
    console.log(asset);
    const imageProps = useNextSanityImage(client, asset);

      if (!imageProps) return null;

    return (
        <div className='mb-8'>
            <Image 
                {...imageProps}
                layout='responsive'
                sizes='(max-width: 800px) 100vw, 800px'
            />
        </div>
    );
}

export default SanityImage;