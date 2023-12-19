'use client'

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";

type LinkItemProps = {
    route: string,
    label: string,
    isNavbarItem?: boolean,
    className?: string,
}

const LinkItem = ({ route, label, isNavbarItem = true, className }: LinkItemProps) => {
    const activeLink = route === usePathname();

    const BarItem = isNavbarItem ? NavbarItem : NavbarMenuItem

    return (
        <BarItem className={className} isActive={activeLink}>
            <Link prefetch color={activeLink ? 'primary' : 'foreground'} href={route}>
                {label}
            </Link>
        </BarItem>
    )
}

const menus = [
    {
        route: '/',
        label: 'Home'
    },
    {
        route: '/about',
        label: 'About'
    },
]

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand className="px-0">
                    <p className="text-lg font-medium">Fatah Widiyanto</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="gap-4" justify="end">
                {
                    menus.map((d: any, i: number) => <LinkItem className="hidden sm:flex" key={i} route={d.route} label={d.label} />)
                }
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {
                    menus.map((d: any, i: number) => <LinkItem key={i} route={d.route} label={d.label} isNavbarItem={false} />)
                }
            </NavbarMenu>
        </Navbar>
    );
}
