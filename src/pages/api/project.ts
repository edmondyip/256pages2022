import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface project {
	content: pageContent;
	metaDescription: metaDescription;
	projects: string[];
}

export default (req: NextApiRequest, res: NextApiResponse<project>) => {
	res.status(200).json({
		content: {
			title: "256pages",
			content: "I am Edmond Yip",
		},
		metaDescription: {
			pageTitle: "project - 256pages",
			pageDescription: "",
			canonicalUrl: "/project",
		},
		projects: ["PJ01","PJ02"],
	});
};
