import Link from 'next/link';

const Header = () => (
  <header className='fixed top-0 border-t-2 border-white w-full bg-black/80 shadow-xl font-mono'>
    <nav aria-labelledby="main-menu" className='text-center'>
        <ul className='flex justify-center'>
          <li className='p-2'><Link href="/">Home</Link></li>
          <li className='p-2'><Link href="https://twitter.com/johnfischelli" target='_blank' rel="noopener noreferrer">Twitter</Link></li>
          <li className='p-2'><Link href="https://github.com/johnfischelli" target='_blank' rel="noopener noreferrer">Github</Link></li>
          <li className='p-2'><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
  </header>
)

export default Header