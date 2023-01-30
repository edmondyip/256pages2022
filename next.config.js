/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const path = require('path')

const nextConfig = () => ({
	reactStrictMode: false,
	swcMinify: true,
	images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		// minimumCacheTTL: 60,
    unoptimized: true
  },
	env: {
		BASE_URL: "http://localhost:3000"
	},
	webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
	sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId}) {
    return {
      "/": { page: "/"},
      "/about": { page: "/about"},
      "/works": { page: "/works"},
      "/contact": { page: "/contact"}
    }
  },
  output: 'standalone',
});

module.exports = nextConfig;
