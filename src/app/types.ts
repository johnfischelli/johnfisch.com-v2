import { Slug, PortableTextBlock } from "@sanity/types";

export type LatestBlogPost = {
    title: string;
    slug: Slug;
    date: string;
}

export type BlogPostListings = {
    posts: BlogPostListing[]
}

export type BlogPostListing = {
    title: string;
    slug: Slug;
    date: string;
}

export type BlogPost = {
    title: string;
    slug: Slug;
    date: string;
    content: PortableTextBlock
}