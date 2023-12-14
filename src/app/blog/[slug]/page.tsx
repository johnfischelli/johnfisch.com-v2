import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image';
import { PortableText } from "@portabletext/react";
import { getCurrentBlogPost } from "@/app/utils"
import DateFormat from "@/components/dateformat";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { title } = await getCurrentBlogPost(params.slug);
    return {
        title: `${title} | John Fischelli`
    }   
}

export default async function Page({ params }: Props) {
    const { title, date, content } = await getCurrentBlogPost(params.slug);
    return (
        <main className="min-h-screen flex px-8 py-24 justify-center font-mono">
            <div className="max-w-3xl w-full">
                <h1 className="text-3xl sm:text-5xl mb-4">{title}</h1>
                <div className='flex items-center gap-4'>
                    <div className="rounded-full overflow-hidden w-10 border-2 border-white">
                        <Image src="/john.png" width={40} height={40} alt="Portrait of John Fischelli" />
                    </div>
                    <p className='text-slate-400'><DateFormat dateString={date} /></p>
                </div>
                <hr className="my-6" />
                <div className="post-content text-xl">
                    <PortableText value={content} />
                </div>
            </div>
        </main>
    )
}