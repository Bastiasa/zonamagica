import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */

    basePath: "/",

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
        dangerouslyAllowSVG: true,
        unoptimized: true,
    },

    allowedDevOrigins: [
        "192.168.0.25",
        "9a1a-181-58-39-172.ngrok-free.app",
    ],

    output: "export",
};

export default nextConfig;
