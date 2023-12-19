import { Divider } from '@nextui-org/react'
import React from 'react'

interface DataProps {
    title: string
}

const Title = ({ title }: DataProps) => {
    return (
        <div className='mb-3 md:mb-5'>
            <div className={'flex w-full flex-col'}>
                <div className='text-2xl md:text-3xl font-extrabold leading-8'>{title}</div>
                <Divider className="my-5"/>
            </div>
        </div>
    )
}

export default Title