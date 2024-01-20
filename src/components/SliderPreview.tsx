'use client'

import React, { useEffect } from 'react';
import { Image } from '@nextui-org/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

function SliderPreview({ datas }: any) {

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#galleryID',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    const previews: any[] = (datas ?? []).map((d: any, i: number) => {
        return (
            <div key={i} className="relative h-80 md:h-[500px] text-center">
                <a
                    href={d.url}
                    data-pswp-width={2500}
                    data-pswp-height={1875}
                    key={'galleryID-' + i}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className='mx-auto'
                        alt="Image"
                        src={d.url}
                        style={{ height: '500px' }}
                        removeWrapper={true}
                    />
                    {
                        d.caption &&
                        <div className="absolute inset-0 z-10 flex items-end justify-center bottom-5 px-5">
                            <p className="max-h-20 md:max-h-40 overflow-y-auto rounded-md p-1 bg-black text-white dark:bg-white dark:text-black ">{d.caption}</p>
                        </div>
                    }
                </a>
            </div>
        );
    })

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='pswp-gallery'
            id='galleryID'
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            {
                previews.map((d: any, i: number) => <SwiperSlide key={i}>{d}</SwiperSlide>)
            }
        </Swiper>
    )
}

export default SliderPreview