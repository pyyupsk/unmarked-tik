import AnswerIcon from '@/assets/icons/answer.png';
import CheckedIcon from '@/assets/icons/checked.png';
import EfficiencyIcon from '@/assets/icons/efficiency.png';
import HDIcon from '@/assets/icons/hd.png';
import MobileFriendlyIcon from '@/assets/icons/mobile-friendly.png';
import VideoIcon from '@/assets/icons/video.png';
import { StaticImageData } from 'next/image';

interface Feature {
    title: string;
    description: string;
    icon: StaticImageData;
}

export const features: Feature[] = [
    {
        title: 'Completely Free',
        description: 'Our tool is completely free to use.',
        icon: CheckedIcon,
    },
    {
        title: 'Removes Watermarks',
        description: 'Download videos and slideshows without any watermarks.',
        icon: VideoIcon,
    },
    {
        title: 'High Definition',
        description: 'Ensure you receive your downloads in their original quality.',
        icon: HDIcon,
    },
    {
        title: 'User-Friendly Interface',
        description: 'Easy-to-use input form for entering TikTok URLs.',
        icon: MobileFriendlyIcon,
    },
    {
        title: 'Comprehensive Download',
        description: 'Download both videos and slideshows.',
        icon: AnswerIcon,
    },
    {
        title: 'Efficient Processing',
        description: 'Quick and efficient retrieval and downloading process.',
        icon: EfficiencyIcon,
    },
];
