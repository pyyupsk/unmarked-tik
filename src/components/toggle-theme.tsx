'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface themeOption {
    name: string;
    value: string;
}

/**
 * Toggle component for changing the theme.
 *
 * @returns {JSX.Element} The ThemeToggle component.
 */
export function ThemeToggle(): JSX.Element {
    const { setTheme, theme } = useTheme();
    const currentTheme: string = theme || 'light';

    const themeOptions: themeOption[] = [
        { name: 'Light', value: 'light' },
        { name: 'Dark', value: 'dark' },
        { name: 'System', value: 'system' },
    ];

    /**
     * Handles the theme option selection.
     *
     * @param {string} value - The selected theme value.
     */
    const handleThemeOption = (value: string): void => {
        setTheme(value);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className={cn('size-5', currentTheme !== 'light' ? 'hidden' : '')} />
                    <Moon className={cn('size-5', currentTheme !== 'dark' ? 'hidden' : '')} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {themeOptions.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => handleThemeOption(option.value)}
                        className={`${option.value === currentTheme ? 'bg-accent' : ''}`}
                    >
                        {option.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
