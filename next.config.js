module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/item?page=1',
        permanent: true,
      },
    ]
  },
  
};
