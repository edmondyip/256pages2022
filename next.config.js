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
  },
	env: {
		BASE_URL: "http://192.168.0.13:3000"
	},
	webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
	sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
});

module.exports = nextConfig;
