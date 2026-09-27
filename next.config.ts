import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  // ship the sanitized demo database with every serverless function so
  // src/lib/db.ts can provision it into TMPDIR on Vercel (see that file
  // for the full story). Without this, output tracing would leave the
  // 3 MB snapshot out of the bundle and the deployed app would have no data.
  outputFileTracingIncludes: {
    "/**": ["./prisma/auditedge-demo.db.gz"],
  },
  async headers() {
    return [
      {
        // the service worker must always be revalidated, never cached by the browser
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        // v21: baseline hardening for the deployed, key-carrying app.
        // frame-ancestors 'self' keeps the app embeddable in its own iframe
        // tests without opening it to arbitrary clickjack hosts.
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
