/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: () => {
        return [
            {
              source: '/blog/i-finally-did-it',
              destination: '/blog',
              permanent: true,
            },
          ]
    }
}

module.exports = nextConfig
