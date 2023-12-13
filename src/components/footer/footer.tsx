const Footer = () => {
    return (
        <footer className='text-center fixed bottom-0 w-full p-2 bg-black/80 text-slate-400 shadow-xl font-mono'>
            <p className='text-sm'>&copy; { new Date().getFullYear() } &#8212; John Fischelli, Built with <a href="https://sanity.io" target='_blank' rel="noopener noreferrer">Sanity</a> &amp; <a href="https://nextjs.org/" target='_blank' rel="noopener noreferrer">Next.js</a></p>
        </footer>
    )
}

export default Footer;