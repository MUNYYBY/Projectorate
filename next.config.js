/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  async headers() {
    // to allow specific headers to appear in requests
    // https://nextjs.org/docs/advanced-features/security-headers
    const securityHeaders = [
      // important
      { key: "Access-Control-Expose-Headers", value: "Content-Disposition" },
    ];
    return [
      {
        source: "/:path*", // req path
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
