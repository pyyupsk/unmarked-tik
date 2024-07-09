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

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row py-6">
                <p className="text-sm text-muted-foreground">Copyright &copy; {currentYear} - All rights reserved.</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    {links.map(({ name, href, isExternal }) => (
                        <Link
                            key={name}
                            href={href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noreferrer' : undefined}
                            className="underline underline-offset-4"
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
