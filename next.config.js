/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats — Next.js auto-converts PNGs to WebP/AVIF
    // This alone will reduce your 1-2MB PNGs to 200-400KB for most users
    formats: ["image/avif", "image/webp"],

    // Quality: 75 for photos (good balance), higher not needed for safari images
    // AVIF compresses much better than WebP at the same visual quality
    qualities: [75],

    // Device sizes — covers all real-world screen widths
    // Next.js picks the smallest image that still looks sharp on the device
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Image sizes — for images that are NOT full viewport width
    // e.g. tour cards, destination cards, gallery thumbnails
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimised images for 30 days on CDN
    // International visitors in UK/US hit Vercel's edge cache — fast
    minimumCacheTTL: 2592000, // 30 days in seconds

    // Prevent dangerously large images being served
    // Your largest image is 1905KB — this is a safety net
    contentDispositionType: "inline",
  },

  // Enable gzip/brotli compression for all responses
  compress: true,
};

module.exports = nextConfig;