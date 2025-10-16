// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amfics.io",
      },
      {
        protocol: "https",
        hostname: "wip.tezcommerce.com",
      },
    ],
  },
};

export default nextConfig;
