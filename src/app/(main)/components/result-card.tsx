'use client';

import { useDetails } from '@/app/(main)/store/useDetails';
import { useLoading } from '@/app/(main)/store/useLoading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useToast } from '@/components/ui/use-toast';
import JSZip from 'jszip';
import { Download, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function ResultCard() {
    const { toast } = useToast();
    const { details } = useDetails();
    const { isLoading, setIsLoading } = useLoading();
    const [percent, setPercent] = useState(0);

    if (details.downloads.length === 0) {
        return null;
    }

    const { title, author, thumbnail, downloads, type } = details;
    const isSlideshow = type === 'slideshow';

    const handleDownload = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            if (downloads.length === 0) {
                throw new Error('No downloads found');
            }

            const zip = new JSZip();
            const folder = zip.folder(title || '');

            if (!folder) {
                throw new Error('Failed to create folder');
            }

            await Promise.all(
                downloads.map(async (url, index) => {
                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error('Failed to fetch image');
                    }

                    const contentLength = +response.headers.get('Content-Length')!;
                    const contentType = response.headers.get('Content-Type')!;
                    const chunks: Uint8Array[] = [];

                    const reader = response.body!.getReader();
                    let receivedLength = 0;

                    while (receivedLength < contentLength) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        chunks.push(value);
                        receivedLength += value.length;
                        setPercent((receivedLength / contentLength) * 100);
                    }

                    const blob = new Blob(chunks);
                    const filename = `${title}_${index + 1}.${contentType.split('/')[1]}`;
                    folder.file(filename, blob);
                })
            );

            const zipFile = await zip.generateAsync({ type: 'blob' });
            const filename = `unmarked_tik_${new Date().toISOString()}.zip`;
            const downloadLink = document.createElement('a');

            downloadLink.href = URL.createObjectURL(zipFile);
            downloadLink.download = filename;
            downloadLink.click();
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Failed to download files',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
            setPercent(0);
        }
    };

    return (
        <div className="space-y-8 w-full border-b pb-10">
            <Carousel className="max-w-lg mx-auto">
                <CarouselContent>
                    {downloads.map((url, index) => (
                        <CarouselItem key={index} className="flex justify-center">
                            <Image
                                src={isSlideshow ? url : thumbnail}
                                alt={title}
                                sizes="100vw"
                                width={0}
                                height={0}
                                className="w-full"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {isSlideshow && (
                    <>
                        <CarouselPrevious />
                        <CarouselNext />
                    </>
                )}
            </Carousel>
            <div className="space-y-4 max-w-lg mx-auto">
                <p className="text-lg font-bold">{title}</p>
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={author.avatar} />
                        <AvatarFallback>{author.nickname.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <Link href={`https://www.tiktok.com/@${author.unique_id}`} target="_blank" rel="noreferrer">
                        {author.nickname} (@{author.unique_id})
                    </Link>
                </div>
                <Button onClick={handleDownload} className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <LoaderCircle className="animate-spin mr-2 size-5" />
                            <span>Downloading ({percent.toFixed(2)}%)</span>
                        </>
                    ) : (
                        <>
                            <Download className="mr-2 size-5" />
                            <span>
                                Download ({downloads.length} {type})
                            </span>
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
