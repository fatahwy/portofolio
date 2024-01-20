import React from 'react'
import { PortableText } from '@portabletext/react';

import BtnAction from '@/components/ui/BtnAction';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

import Project from "../../../services/Project";
import SliderPreview from '../../../components/SliderPreview'

async function DetailProject({ params }: any) {
    const data = await Project.findOne(params.id);

    return (
        <div>
            <div className='text-3xl font-semibold'>{data.title}</div>
            <div className='py-3'>{data.overview}</div>
            <div className='flex gap-1 mb-5'>
                <BtnAction route={data.urlwebsite} label='Demo' icon={<CiLocationArrow1 />} />
                <BtnAction route={data.urlrepository} label='Repository' icon={<FaGithub />} />
            </div>
            {
                data?.previews && data?.previews.length > 0 &&
                <div className='w-full'>
                    <SliderPreview datas={data.previews} />
                </div>
            }
            <div className='w-full mt-5 prose'>
                <PortableText value={data.description} />
            </div>
        </div>
    )
}

export default DetailProject