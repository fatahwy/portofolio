import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type BtnActionProps = {
    route: string,
    label: string,
    icon: any,
}

const BtnAction = ({ route = '', label, icon }: BtnActionProps) => {
    return (
        <Button title={label} color='default' size='sm' radius='full' variant='flat'>
            <Link className='flex items-center gap-1' href={route}>{icon} {label}</Link>
        </Button>
    )
}

export default BtnAction;