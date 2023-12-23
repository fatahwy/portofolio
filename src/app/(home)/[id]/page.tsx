import React from 'react'
import { Image } from '@nextui-org/react';
import NextImage from 'next/image'
import { PortableText } from '@portabletext/react';

import BtnAction from '@/components/ui/BtnAction';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

import Project from "../../../services/Project";
import SliderPreview from '../../../components/SliderPreview'

async function DetailProject({ params }: any) {
    const data = await Project.findOne(params.id);

    const previews: any[] = (data.previews ?? []).map((d: any, i: number) => {
        return (
            <div key={i} className="relative h-80 md:h-[500px]">
                <Image
                    as={NextImage}
                    className='object-cover object-center'
                    alt="Image"
                    src={d.url}
                    width={1000}
                    height={500}
                />
                <div className="absolute inset-0 z-10 flex items-end justify-center bottom-5 px-5">
                    <p className="max-h-20 md:max-h-40 overflow-y-auto rounded-md p-1 bg-black text-white dark:bg-white dark:text-black ">{d.caption}</p>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className='text-3xl font-semibold'>{data.title}</div>
            <div className='py-3'>{data.overview}</div>
            <div className='flex gap-1 mb-5'>
                <BtnAction route={data.urlwebsite} label='Demo' icon={<CiLocationArrow1 />} />
                <BtnAction route={data.urlrepository} label='Repository' icon={<FaGithub />} />
            </div>
            {
                previews.length > 0 &&
                <div className='h-80 md:h-[500px] w-full'>
                    <SliderPreview datas={previews} />
                </div>
            }
            <div className='w-full mt-5 prose'>
                <PortableText value={data.description} />
            </div>
        </div>
    )
}

export default DetailProject