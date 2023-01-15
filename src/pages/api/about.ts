import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface aboutProps {
	content: pageContent;
	metaDescription: metaDescription;
	history: pageContent;
}

export default (req: NextApiRequest, res: NextApiResponse<aboutProps>) => {
	res.status(200).json({
		content: {
			title: "about",
			content: "Hi, I am Edmond Yip, a Frontend Engineer 👨‍💻 base in UK 🇬🇧. Working with Typescript, React and Vue.",
		},
		metaDescription: {
			pageTitle: "about - 256pages",
			pageDescription:
				"Hi, i am a designer from Hong Kong. As my position is a full stack designer, that's mean i can design from graphic to user experience, also the front-end programming.",
			canonicalUrl: "/about",
		},
		history: {
			title: "about 256pages",
			content: "",
		},
	});
};
