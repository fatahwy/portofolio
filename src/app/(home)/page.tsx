import React from 'react'
import { Card, CardBody, Image } from '@nextui-org/react'
import { FaGithub } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import NextImage from "next/image";
import Link from 'next/link';

import Title from '../../components/Title';
import BtnAction from '../../components/ui/BtnAction'

import Project from "../../services/Project";
import { ProjectType } from '@/types/Project';

export default async function HomePage() {
    const datas = await Project.findAll();

    return (
        <>
            <Title title='Projects' />
            <div className='flex flex-col gap-5 items-center'>
                {
                    datas.map((d: ProjectType, i: number) => {
                        return (
                            <Card
                                key={i}
                                className="bg-background dark:bg-default-100 w-full"
                            >
                                <CardBody>
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-start w-full">
                                        <div className="md:w-5/12 w-full">
                                            <Link href={`/${d._id}`} prefetch>
                                                <Image
                                                    as={NextImage}
                                                    alt={d.title}
                                                    className="object-cover scale-[1] hover:scale-[1.01] max-h-[200px]"
                                                    height={500}
                                                    width={1000}
                                                    src={d.previews ? d.previews[0]?.url : ''}
                                                    radius='md'
                                                />
                                            </Link>
                                        </div>

                                        <div className="flex flex-col w-full md:w-7/12 gap-3">
                                            <Link className="text-2xl font-medium mt-2 hover:underline" href={`/${d._id}`} prefetch>{d.title}</Link>
                                            <p className="text-foreground/80">{d.overview}</p>
                                            <div className="flex gap-2">
                                                <BtnAction route={d.urlwebsite} label='Demo' icon={<CiLocationArrow1 />} />
                                                <BtnAction route={d.urlrepository} label='Repository' icon={<FaGithub />} />
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}