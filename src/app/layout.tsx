import { cn } from '@/lib/utils';
import '@/app/globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { fontHeading, fontSans } from '@/fonts';
import { commonMetaData } from '@/lib/meta';
import { Metadata } from 'next';

const TITLE = 'Unmarked Tik: Download TikTok Videos Without Watermarks';
const DESCRIPTION =
    'Use Unmarked Tik to download TikTok videos and slideshows in HD quality without watermarks. Our free and user-friendly tool ensures high-definition downloads with no limits. Enjoy efficient and comprehensive downloading today!';

/**
 * Generates metadata for the page.
 *
 * @returns {Promise<Metadata>} The generated metadata.
 */
export async function generateMetadata(): Promise<Metadata> {
    const metaData: Metadata = commonMetaData({
        title: {
            template: `%s | ${TITLE}`,
            default: TITLE,
        },
        description: DESCRIPTION,
    });

    return metaData;
}

/**
 * Renders the root layout of the application.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {React.ReactElement} The rendered root layout.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.ReactElement {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontHeading.variable,
                    fontSans.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
