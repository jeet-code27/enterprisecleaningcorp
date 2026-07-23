import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/schedulecleaning.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/cleaningservices.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/reviews.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/specialemergencycleaning.html',
        destination: '/emergency-restoration-services-central-ma',
        permanent: true,
      },
      {
        source: '/software.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/employment.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/customers.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/commercial-cleaning-massachusetts-a-buyers-guide',
        destination: '/blog/commercial-cleaning-massachusetts-a-buyers-guide',
        permanent: true,
      },
      {
        source: '/commercial-cleaning-massachusetts-a-buyers-guide.html',
        destination: '/blog/commercial-cleaning-massachusetts-a-buyers-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
