"use client";

import { Button, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDarkMode = theme === 'dark';

    return (
        <Switch
            color="default"
            value={theme}
            size="sm"
            startContent={<CiLight />}
            endContent={<CiDark />}
            onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
        >
        </Switch>
    );
};