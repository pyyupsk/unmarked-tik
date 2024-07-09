'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface themeOption {
    name: string;
    value: string;
}

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const currentTheme = theme || 'light';

    const themeOptions: themeOption[] = [
        { name: 'Light', value: 'light' },
        { name: 'Dark', value: 'dark' },
        { name: 'System', value: 'system' },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className={`size-5 ${currentTheme !== 'light' ? 'hidden' : ''}`} />
                    <Moon className={`size-5 ${currentTheme !== 'dark' ? 'hidden' : ''}`} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {themeOptions.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`${option.value === currentTheme ? 'bg-accent' : ''}`}
                    >
                        {option.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
