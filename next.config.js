/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
			},
		],
	},
	// env: {
	// 	EMAIL: process.env.EMAIL,
	// 	EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
	// 	EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
	// 	PUBLIC_KEY: process.env.PUBLIC_KEY,
	// },
};

module.exports = nextConfig;
