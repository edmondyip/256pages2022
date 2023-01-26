import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface aboutProps {
	content: Record<string, pageContent>;
	metaDescription: metaDescription;
}

export default (req: NextApiRequest, res: NextApiResponse<aboutProps>) => {
	res.status(200).json({
		metaDescription: {
			pageTitle: "About - 256pages",
			pageDescription:
				"I am Edmond Yip. A Frontend Engineer 👨‍💻 base in Bristol 🇬🇧. Working with Typescript, React and Vue",
			canonicalUrl: "/about",
		},
		content: {
			about: {
				title: "about",
				content:
					"Hi, I am Edmond Yip, a Frontend Engineer 👨‍💻 base in Bristol 🇬🇧. Working with Typescript, React and Vue.",
			},
			location: {
				title: "location",
				content: "I living from Hong Kong 🇭🇰 to United Kingdom 🇬🇧",
			},
			position: {
				title: "position",
				content: "I working from Design 🎨 to Develop 💻",
			},
			framework: {
				title: "framework",
				content: "I learning from Vue to React",
			},
		},
	});
};
