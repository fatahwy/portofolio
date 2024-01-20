"use client";

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GlobalType } from "@/types/Global";

type LinkItemProps = {
    route: string,
    label: string,
    isNavbarItem?: boolean,
    className?: string,
}

const LinkItem = ({ route, label, isNavbarItem = true, className }: LinkItemProps) => {
    const isActive = route === usePathname();

    const BarItem = isNavbarItem ? NavbarItem : NavbarMenuItem

    return (
        <BarItem className={className} isActive={isActive}>
            <Link prefetch className="hover:underline" color={isActive ? 'primary' : 'foreground'} href={route}>
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

export default function NavBar({ navbar }: GlobalType) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="px-0">
                    <Link href='/' className="text-lg font-medium" prefetch>{navbar}</Link>
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
