interface Privacy {
    title: string;
    description: string;
    list?: string[];
}

export const privacy: Privacy[] = [
    {
        title: '1. Introduction',
        description:
            'Welcome to Unmarked Tik. We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and protect your information when you use our website.',
    },
    {
        title: '2. Information We Collect',
        description:
            'No information is sent or stored for now. We do not collect any personal identification information, technical data, or usage data when you use our website.',
    },
    {
        title: '3. How We Use Your Information',
        description:
            'Since we do not collect any information, we do not use your information for any purposes at this time.',
    },
    {
        title: '4. Sharing Your Information',
        description:
            'Since we do not collect any information, we do not share your information with any outside parties.',
    },
    {
        title: '5. Security of Your Information',
        description:
            'We are committed to ensuring that your information is secure. However, since we do not collect any information, there are no security measures required for your data.',
    },
    {
        title: '6. Changes to This Privacy Policy',
        description:
            'We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.',
        list: [
            'Updates will be effective immediately upon posting.',
            'Continued use of the website after changes constitute your acceptance of the new policy.',
        ],
    },
    {
        title: '7. Contact Us',
        description: 'If you have any questions about this privacy policy, please contact us at: pyyupsk@proton.me',
    },
];
