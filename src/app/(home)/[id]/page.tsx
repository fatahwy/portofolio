import React from 'react'
import { Image } from '@nextui-org/react';
import { PortableText } from '@portabletext/react';

import BtnAction from '@/components/ui/BtnAction';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

import { client } from '../../../../sanity/lib/client';
import IProject from "../../../types/Project";
import SliderPreview from '../../../components/SliderPreview'

async function getProject(id: string) {
    const query = `*[_type == "project" && _id == '${id}'][0] {
        _id,
        title,
        overview,
        'thumbnail': thumbnail.asset->url,
        previews[] {
            'url': image.asset->url,
            caption
        },
        description,
        urlwebsite,
        urlrepository,
    }`

    const data = await client.fetch(query);

    return data;
}

async function DetailProject({ params }: any) {
    const data: IProject = await getProject(params.id);

    const previews: any[] = data.previews.map((d: any, i: number) => {

        return (
            <div className="relative h-[500px]">
                <Image
                    className='object-cover object-center'
                    key={i}
                    alt="Image"
                    src={d.url}
                />
                <div className="absolute inset-0 z-10 flex items-end justify-center bottom-10 px-5">
                    <p className="">{d.caption}</p>
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
            <div className='h-[500px] w-full'>
                <SliderPreview datas={previews} />
            </div>
            <div className='w-full mt-5'>
                <PortableText value={data.description} />
            </div>
        </div>
    )
}

export default DetailProject