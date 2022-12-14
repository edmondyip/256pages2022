/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const path = require('path')

const nextConfig = () => ({
	reactStrictMode: true,
	swcMinify: true,
	env: {
		BASE_URL: "http://localhost:3000"
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
