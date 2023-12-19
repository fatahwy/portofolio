import React from 'react'
import { Card, CardBody, Image } from '@nextui-org/react'
import { FaGithub } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

import Title from '../../components/Title';
import BtnAction from '../../components/ui/BtnAction'

import Project, { ProjectType } from "../../services/Project";

const DetailProject = async () => {
    const datas = await Project.findAll();

    return (
        datas.map((d: ProjectType, i: number) => {
            return (
                <Card
                    key={i}
                    className="bg-background dark:bg-default-100"
                >
                    <CardBody>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-start">
                            <div className="md:w-5/12 w-full">
                                <Image
                                    alt={d.title}
                                    className="object-cover"
                                    height={500}
                                    shadow="md"
                                    src={d.thumbnail}
                                    width="100%"
                                />
                            </div>

                            <div className="flex flex-col w-full md:w-7/12 gap-3">
                                <h1 className="text-2xl font-medium mt-2">{d.title}</h1>
                                <p className="text-foreground/80">{d.overview}</p>
                                <div className="flex gap-2">
                                    <BtnAction route={d.urlwebsite} label='Demo' icon={<CiLocationArrow1 />} />
                                    <BtnAction route={d.urlrepository} label='Repository' icon={<FaGithub />} />
                                    <BtnAction route={`/${d._id}`} label='Read More' icon={<MdReadMore />} />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            )
        })
    )
}

export default function HomePage() {
    return (
        <>
            <Title title='Projects' />
            <div className='flex flex-col gap-5 items-center'>
                <DetailProject />
            </div>
        </>
    )
}