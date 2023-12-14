import type { Metadata } from 'next'
import Link from 'next/link';
import { listBlogPosts } from "@/app/utils"
import DateFormat from "@/components/dateformat";

export const metadata: Metadata = {
    title: 'Blog | John Fischelli',
    description: 'The personal blog and site of John Fischelli',
}

export default async function Page() {
    const { posts } = await listBlogPosts();
    return (
        <main className="min-h-screen flex px-8 py-12 justify-center font-mono">
            <div className="max-w-3xl w-full">
                <h1 className="text-3xl sm:text-5xl">Blog</h1>
                <hr className='my-6' />
                { posts.map((p) => {
                    return (
                    <p key={p.slug.current} className='text-center'>
                        <Link href={`/blog/${p.slug.current}`}>
                        {p.title}
                        </Link>
                        <br/>
                        <span className='text-slate-400'><DateFormat dateString={p.date} /></span>
                    </p>
                )})}
            </div>
        </main>
    )
}