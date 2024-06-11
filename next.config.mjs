import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
});

export default withMDXConfig(nextConfig);
