import { privacy, Privacy } from '@/data/privacy';

/**
 * Renders the privacy page of the application.
 * @returns The privacy page JSX element.
 */
export default function PrivacyPage(): JSX.Element {
    return (
        <main className="container min-h-[calc(100vh-4rem)] space-y-10 flex flex-col py-20">
            <h1 className="text-4xl font-semibold leading-none tracking-tight">Privacy Policy</h1>
            {privacy.map((section: Privacy, index: number) => (
                <section key={index} className="space-y-4">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <p>{section.description}</p>
                    {section.list && (
                        <ul className="list-inside list-disc space-y-2">
                            {section.list.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </main>
    );
}
