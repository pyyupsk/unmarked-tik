'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

/**
 * A higher-order component (HOC) that wraps the children with the
 * `NextThemesProvider` component.
 *
 * @param {ThemeProviderProps} props - The props for the `ThemeProvider` component.
 * @param {React.ReactNode} props.children - The children to be wrapped.
 * @returns {React.ReactNode} - The wrapped children.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps): React.ReactNode {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
