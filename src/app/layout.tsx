import { cn } from '@/lib/utils';
import '@/app/globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { fontHeading, fontSans } from '@/fonts';
import { commonMetaData } from '@/lib/meta';

const TITLE = 'Unmarked Tik: Download TikTok Videos Without Watermarks';
const DESCRIPTION =
    'Use Unmarked Tik to download TikTok videos and slideshows in HD quality without watermarks. Our free and user-friendly tool ensures high-definition downloads with no limits. Enjoy efficient and comprehensive downloading today!';

export async function generateMetadata() {
    const metaData = commonMetaData({
        title: {
            template: `%s | ${TITLE}`,
            default: TITLE,
        },
        description: DESCRIPTION,
    });

    return metaData;
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
