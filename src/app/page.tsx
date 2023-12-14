import Image from 'next/image';
import Link from 'next/link';
import Typing from '@/components/typing';
import DateFormat from '@/components/dateformat';
import { getLatestBlogPost } from '@/app/utils';

export default async function Home() {
  const latestBlogPost = await getLatestBlogPost();
  return (
    <main className="min-h-screen p-8 flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full text-sm">
        <div className="rounded-full overflow-hidden w-52 border-4 border-white">
          <Image src="/john.png" width={208} height={208} alt="Portrait of John Fischelli" />
        </div>
        <h1 className='text-5xl mt-8 text-center'>John Fischelli</h1>
        <Typing />
        <p className='text-center'>
          <Link href={`/blog/${latestBlogPost.slug.current}`}>
            {latestBlogPost.title}
          </Link>
          <br/>
          <span className='text-slate-400'><DateFormat dateString={latestBlogPost.date} /></span>
        </p>
      </div>
    </main>
  )
}
