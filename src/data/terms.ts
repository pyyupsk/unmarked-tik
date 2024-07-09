interface Term {
    title: string;
    description: string;
    list?: string[];
}

export const terms: Term[] = [
    {
        title: '1. Use of Service',
        description:
            'By using our website, you agree to abide by these terms and conditions. If you disagree with any part of the terms, please do not use our services.',
    },
    {
        title: '2. TikTok Video Downloads',
        description:
            'Our website provides a service to download TikTok videos. You agree to use this service responsibly and only for personal, non-commercial purposes.',
    },
    {
        title: '3. User Conduct',
        description: 'When using our website, you agree not to:',
        list: [
            'Use our website in any unlawful manner.',
            'Attempt to disrupt the functioning of our website.',
            'Share content that violates copyright or intellectual property rights.',
        ],
    },
    {
        title: '4. Limitation of Liability',
        description: 'We are not liable for any damages or losses resulting from the use of our website or services.',
    },
    {
        title: '5. Changes to Terms of Service',
        description:
            'We may update our terms of service from time to time. You are responsible for checking this page for any changes.',
    },
    {
        title: '6. Governing Law',
        description: 'These terms are governed by and construed by the laws of Thailand.',
    },
];
