import Title from '@/components/Title';
import { Avatar } from '@nextui-org/react'
import Link from 'next/link';
import React from 'react'
import { PortableText } from '@portabletext/react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { client } from '../../../sanity/lib/client';
import IAbout from "../../types/About";

async function getAbout() {
    const query = `*[_type == "about"][0] {
        name,
        role,
        'photo': photo.asset->url,
        description,
        urllinkedin,
        urlgithub,
    }`;

    const data = await client.fetch(query);

    return data;
}

export const revalidate = 2;

async function AboutPage() {
    const data: IAbout = await getAbout();

    return (
        <>
            <Title title='About Me' />
            <div className='flex flex-col md:flex-row gap-5'>
                <div className="flex flex-col items-center w-full md:w-5/12">
                    <Avatar className='w-48 h-48' src={data.photo} />
                    <div className='text-2xl font-semibold text-center pt-4'>{data.name}</div>
                    <div className='text-xl text-center'>{data.role}</div>
                    <div className='w-full flex justify-center gap-4 pt-4'>
                        <Link href={data.urlgithub}>
                            <FaGithub className="text-3xl" />
                        </Link>
                        <Link href={data.urllinkedin}>
                            <FaLinkedin className="text-3xl" />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-7/12">
                    <PortableText value={data.description} />
                </div>
            </div>
        </>
    )
}

export default AboutPage