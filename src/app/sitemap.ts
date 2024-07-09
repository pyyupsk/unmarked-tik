import { BASE_URL } from '@/constants';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

type Sitemap = {
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
    alternates?: {
        languages?: Languages<string>;
    };
};

export default async function sitemap(): Promise<Sitemap[]> {
    const home = generatePageMetadata(BASE_URL, 'weekly');
    const privacy = generatePageMetadata(`${BASE_URL}/privacy`, 'monthly');
    const terms = generatePageMetadata(`${BASE_URL}/terms`, 'monthly');

    return [home, privacy, terms];
}

function generatePageMetadata(url: string, changeFrequency: Sitemap['changeFrequency']): Sitemap {
    return {
        url,
        lastModified: new Date(),
        priority: 1.0,
        changeFrequency,
    };
}
