import React from 'react'
import { Avatar, Card, CardBody, Image } from '@nextui-org/react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import NextImage from "next/image";
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import BtnAction from '../../components/ui/BtnAction'

import { ProjectType } from '@/types/Project';
import { TechStackType } from '@/types/TechStack';
import Project from "../../services/Project";
import About from '@/services/About';
import TechStack from '@/services/TechStack';

export default async function HomePage() {
    const limit: number = 2;

    const listProject = await Project.findAll(3);
    const listTechStack = await TechStack.findAll();
    const totalProject = await Project.count();
    const about = await About.findOne();

    return (
        <>
            <div className='flex flex-col md:flex-row gap-5 mt-10 mb-20'>
                <div className="flex flex-col items-center w-full md:w-2/5">
                    <Avatar className='w-44 h-44' src={about.photo} />
                    <div className='text-2xl font-semibold pt-4'>{about.name}</div>
                    <div className='text-xl'>{about.role}</div>
                    <div className='w-full flex justify-center gap-x-10 pt-4'>
                        <Link href={about.urlgithub} prefetch className='hover:shadow-2xl'>
                            <FaGithub className="text-3xl" />
                        </Link>
                        <Link href={about.urllinkedin} prefetch className='hover:shadow-2xl'>
                            <FaLinkedin className="text-3xl" />
                        </Link>
                    </div>
                </div>
                <div className="w-full text-lg justify-center">
                    <PortableText value={about.description} />
                </div>
            </div>

            <div className='font-medium my-5 text-3xl'>Tech Stack</div>
            <div className='grid grid-cols-6 gap-5 mb-20'>
                {
                    listTechStack.map((d: TechStackType, i: number) => {
                        return (
                            <Link target='_blank' href={d.url} key={i} className='flex items-center gap-x-3 p-1.5 rounded-2xl transition-all bg-gray-200 hover:bg-gray-300'>
                                <NextImage src={d.icon} alt={d.name} width={40} height={40} />
                                <div className='text-lg font-medium dark:text-black'>{d.name}</div>
                            </Link>
                        )
                    })
                }
            </div>

            <div className='font-medium my-5 flex justify-between items-center'>
                <div className='text-3xl'>Latest Project</div>
                {
                    totalProject > limit &&
                    <Link href='/projects' className='hover:font-semibold'>Show All</Link>
                }
            </div>
            <div className='flex flex-col gap-5 items-center'>
                {
                    listProject.map((d: ProjectType, i: number) => {
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