import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { faqs } from '@/data/faqs';
import { features } from '@/data/features';
import Image from 'next/image';
import { InputForm } from './components/input-form';
import { ResultCard } from './components/result-card';

export default function Home() {
    return (
        <main className="container space-y-10 flex flex-col items-center py-20">
            <div className="text-center space-y-2">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Welcome to Unmarked Tik</h1>
                <p className="text-base lg:text-lg max-w-none md:max-w-2xl">
                    A free online tool is available for downloading TikTok videos and slideshows without the watermark
                    in HD quality.
                </p>
            </div>
            <InputForm />
            <ResultCard />
            <section className="w-full flex flex-col items-center space-y-6">
                <h2 className="text-3xl font-semibold leading-none tracking-tight text-center">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {features.map((feature, index) => (
                        <Card key={index}>
                            <CardHeader className="flex items-center space-y-4">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={56}
                                    height={56}
                                    className="size-14 dark:invert"
                                />
                                <CardTitle className="text-center">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            <section className="w-full flex flex-col items-center space-y-6">
                <h2 className="text-3xl font-semibold leading-none tracking-tight text-center">
                    Frequently Asked Questions
                </h2>
                <Accordion type="multiple" defaultValue={faqs.map((_, index) => `item-${index}`)} className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </main>
    );
}
