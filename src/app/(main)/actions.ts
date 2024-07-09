'use server';

import { Details } from '@/types/Details';

interface Response {
    code: number;
    msg: string;
    data: Data;
}

interface Data {
    title: string;
    cover: string;
    size: string;
    hdplay: string;
    author: Author;
    images: string[];
}

interface Author {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
}

const API_URL = 'https://www.tikwm.com';

/**
 * Fetches details about a TikTok video or slideshow.
 *
 * @param {string} url - The URL of the TikTok video or slideshow.
 * @param {string} agent - The user agent string used for the request.
 * @returns {Promise<Details>} A promise that resolves with the details of the TikTok video or slideshow.
 * @throws {Error} If the request fails or the response is not successful.
 */
export const fetchDetails = async (url: string, agent: string): Promise<Details> => {
    try {
        const headers: Record<string, string> = {
            accept: 'application/json, text/javascript, */*; q=0.01',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'user-agent': agent,
        };

        const requestBody = new URLSearchParams({
            url,
            count: '12',
            cursor: '0',
            web: '1',
            hd: '1',
        });

        const response = await fetch(`${API_URL}/api/`, {
            method: 'POST',
            headers,
            body: requestBody,
        });

        const data: Response = await response.json();

        if (data.code !== 0) {
            throw new Error(data.msg);
        }

        const { title, cover, author: dataAuthor, hdplay, size, images } = data.data;

        const isVideo = Boolean(size);
        const type: 'video' | 'slideshow' = isVideo ? 'video' : 'slideshow';
        const thumbnail = `${API_URL}${cover}`;
        const author: Author = {
            ...dataAuthor,
            avatar: `${API_URL}${dataAuthor.avatar}`,
        };
        const downloads = isVideo ? [`${API_URL}${hdplay}`] : images;

        return {
            type,
            thumbnail,
            title,
            author,
            downloads,
        };
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};
