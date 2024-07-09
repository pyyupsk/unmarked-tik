interface Author {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
}

export interface Details {
    type: 'video' | 'slideshow';
    thumbnail: string;
    title: string;
    author: Author;
    downloads: string[];
}
