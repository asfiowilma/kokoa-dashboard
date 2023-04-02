// @ts-check
const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  // Use the prefix in production and not development.
  assetPrefix: isProd ? '/kokoa-dashboard/' : '',
}

module.exports = nextConfig
