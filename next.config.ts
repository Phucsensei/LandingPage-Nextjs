import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'codakid.com',
      'wearenotch.com',
      'www.kerridgecs.com',
      'opendatascience.com',
      'raw.githubusercontent.com',
      'via.placeholder.com'
    ]
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: '@import "@/app/styles/mixins";'
  },
  webpack(config: any) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack']
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  // Cache optimizations
  generateEtags: true,
  staticPageGenerationTimeout: 100
}