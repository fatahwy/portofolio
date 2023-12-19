import { NavbarBrand } from '@nextui-org/react'
import React from 'react'
import Global from '../../services/Global'
import Link from 'next/link';

async function NavBarBrand() {
    const data = await Global.findOne();

    return (
        <NavbarBrand className="px-0">
            <Link href='/' className="text-lg font-medium">{data.navbar}</Link>
        </NavbarBrand>
    )
}

export default NavBarBrand