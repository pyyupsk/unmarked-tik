'use client';

import { fetchDetails } from '@/app/(main)/actions';
import { useDetails } from '@/app/(main)/store/useDetails';
import { useLoading } from '@/app/(main)/store/useLoading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { LoaderCircle, X } from 'lucide-react';
import { useState } from 'react';

export function InputForm() {
    const { toast } = useToast();

    const [inputUrl, setInputUrl] = useState('');
    const { isLoading, setIsLoading } = useLoading();
    const { setDetails } = useDetails();

    const isSubmitDisabled = isLoading || inputUrl === '';

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(event.target.value);
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const details = await fetchDetails(inputUrl, navigator.userAgent);
            setDetails(details);
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Failed to fetch details from the URL',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-2 max-w-2xl w-full">
            <div className="w-full relative">
                <Input
                    type="text"
                    placeholder="Enter the TikTok video/slideshow URL"
                    onChange={handleInputChange}
                    value={inputUrl}
                    disabled={isLoading}
                />
                <Button
                    variant="outline"
                    size="icon"
                    className={cn('absolute right-0 top-0 text-muted-foreground rounded-l-none transition-opacity', {
                        'opacity-0': isSubmitDisabled,
                        'pointer-events-none': isSubmitDisabled,
                    })}
                    onClick={() => setInputUrl('')}
                >
                    <X className="size-5" />
                </Button>
            </div>
            <Button type="submit" className="min-w-[69px]" onClick={handleSubmit} disabled={isSubmitDisabled}>
                {isLoading ? <LoaderCircle className="animate-spin" /> : 'Fetch'}
            </Button>
        </div>
    );
}
