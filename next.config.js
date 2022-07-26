/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "diksha.gov.in",
      "dl.airtable.com",
    ],
  },
};

module.exports = nextConfig;
