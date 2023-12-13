import { cache } from 'react'
import { notFound } from 'next/navigation';
import { createClient } from 'next-sanity';
import { LatestBlogPost, BlogPost, BlogPostListings } from './types';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false
});

export const getLatestBlogPost = cache(async (): Promise<LatestBlogPost> => {
    const { title, slug, date } = await client.fetch(`*[_type == "post"][0]{title, slug, date}`);
    return {
        title,
        slug,
        date
    }
});

export const getCurrentBlogPost = cache(async (postSlug: string): Promise<BlogPost> => {
    try {
        const { title, slug, date, content } = await client.fetch(`*[slug.current == "${postSlug}"][0]`);
        return {
            title,
            slug,
            date,
            content,
        };
    } catch (e: any) {
        notFound();
    }
})

export const listBlogPosts = cache(async (): Promise<BlogPostListings> => {
    const data = await client.fetch(`*[_type == "post"]{title, slug, date}`);
    return {
        posts: data
    };
})