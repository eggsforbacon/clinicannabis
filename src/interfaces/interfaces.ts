export type CartItem = {
    id: string,
    name: string,
    desc: string,
    price: number,
    quantity: number,
    discount?: number,

}

export type CartState = {
    itemCount: number
    items: CartItem[],
    checked: boolean
}

type CoverFields = {
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

export type CoverAttributesPost = {
    data: {
        id: number,
        attributes: {
            name: string,
            alternativeText: null | string,
            caption: null | string,
            width: number,
            height: number,
            formats: {
                thumbnail: CoverFields,
                small: CoverFields,
                medium: CoverFields,
                large: CoverFields
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

export type AttributesTestimonialPost = {
    firstName: string,
    lastName: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string,
    reel: string,
    localizations: [Object],
}

export type AttributesBlogPost = {
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

export type StrapiPost = {
    id: number,
    attributes: [Object]
}

export type StrapiGetOneResponse = {
    data: StrapiPost,
    meta: {}
}

export type StrapiGetAllResponse = {
    data: StrapiPost[] | null,
    meta?: { pagination: { page: number, pageSize: number, pageCount: number, total: number } }
    error?: {
        status: number,
        name : string,
        message : string,
        details: {}
    }
}