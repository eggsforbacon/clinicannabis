export interface CartItem {
    id: string,
    name: string,
    desc: string,
    price: number,
    quantity: number,
    discount?: number,

}

export interface CartState {
    itemCount: number
    items: CartItem[],
    checked: boolean
}

interface CoverFormats {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: null | string,
    width: number,
    height: number,
    size: number,
    url: string
}

interface LocalizationCover {
    data: []
}

export interface CoverAttributesBlogPost {
    data: {
        id: number,
        attributes: {
            name: string,
            alternativeText: null | string,
            caption: null | string,
            width: number,
            height: number,
            formats: {
                thumbnail: CoverFormats,
                small: CoverFormats,
                medium: CoverFormats,
                large: CoverFormats
            },
            hash: string,
            ext: string,
            mime: string,
            size: number,
            url: string,
            previewUrl: null | string,
            provider: string,
            provider_metadata: null,
            createdAt: string,
            updatedAt: string
        }
    }
}

export interface AttributesBlogPost {
    body: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string,
    title: string,
    date: string,
    description: string,
    subtitle: string,
    cover: [Object],
    thumbnail: [Object],
    localizations: [Object]
}

export interface BlogPost {
    id: number,
    attributes: [Object]
}

export interface StrapiGetAllResponse {
    data: [{ id: number, attributes: [Object] }],
    meta: { pagination: { page: number, pageSize: number, pageCount: number, total: number } }
}