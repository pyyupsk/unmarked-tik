import Link from 'next/link';

interface LinkProps {
    name: string;
    href: string;
    isExternal?: boolean;
}

const links: LinkProps[] = [
    {
        name: 'Privacy Policy',
        href: '/privacy',
    },
    {
        name: 'Terms of Service',
        href: '/terms',
    },
    {
        name: 'Source Code',
        href: 'https://github.com/pyyupsk/unmarked-tik',
        isExternal: true,
    },
];

/**
 * Renders the footer component with links to privacy policy, terms of service, and the source code.
 *
 * @return {JSX.Element} The footer component.
 */
export function Footer(): JSX.Element {
    const currentYear: number = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row py-6">
                <p className="text-sm text-muted-foreground">Copyright &copy; {currentYear} - All rights reserved.</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    {links.map(
                        ({ name, href, isExternal }: LinkProps): JSX.Element => (
                            <Link
                                key={name}
                                href={href}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noreferrer' : undefined}
                                className="underline underline-offset-4"
                            >
                                {name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </footer>
    );
}
