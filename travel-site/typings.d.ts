export interface Post {
    id: Key | null | undefined;
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    mainImage: {
        asset: {
            url: string;
        }
    }
    body: [object]
}