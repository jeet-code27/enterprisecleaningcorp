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
        source: '/services/janitorial-services',
        destination: '/janitorial-services',
        permanent: true,
      },
      {
        source: '/services/medical-office-cleaning',
        destination: '/medical-office-cleaning',
        permanent: true,
      },
      {
        source: '/services/office-cleaning',
        destination: '/office-cleaning',
        permanent: true,
      },
      {
        source: '/day-and-night-shift-commercial-cleaning-services-central-ma',
        destination: '/office-cleaning',
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
      // 301 Redirects for broken 404 blog links flagged in Site Audit
      {
        source: '/Find%20a%20Reliable%20Office%20Cleaning%20Company%20Near%20Waltham',
        destination: '/blog/how-do-i-find-a-reliable-office-cleaning-company-near-waltham-ma',
        permanent: true,
      },
      {
        source: '/How%20to%20Hire%20&%20Screen%20Commercial%20Cleaners',
        destination: '/blog/how-to-hire-and-screen-commercial-cleaners',
        permanent: true,
      },
      {
        source: '/How%20to%20Hire%20%26%20Screen%20Commercial%20Cleaners',
        destination: '/blog/how-to-hire-and-screen-commercial-cleaners',
        permanent: true,
      },
      {
        source: '/Office%20Cleaning%20in%20Providence%20RI',
        destination: '/blog/office-cleaning-in-providence',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
