import { Github } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './toggle-theme';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';

export function Header() {
    return (
        <header className="sticky top-0 z-50 h-16 border-b bg-background/90 backdrop-blur">
            <nav className="container flex h-full items-center justify-between">
                <Link href="/" className="text-xl font-semibold">
                    Unmarked Tik
                </Link>
                <div className="flex items-center space-x-2">
                    <ThemeToggle />
                    <Separator orientation="vertical" className="h-6" />
                    <Link
                        href="https://github.com/pyyupsk/unmarked-tik"
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({ variant: 'ghost' })}
                    >
                        <Github className="mr-2 size-5" />
                        Source
                    </Link>
                </div>
            </nav>
        </header>
    );
}
