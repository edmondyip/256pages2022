import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface caseProps {
	content: pageContent;
	metaDescription: metaDescription;
	projects: string[];
}

export default (req: NextApiRequest, res: NextApiResponse<caseProps>) => {
	res.status(200).json({
		content: {
			title: "case",
			content: "I developed over 100 websites in my career, let me show some cases",
		},
		metaDescription: {
			pageTitle: "case - 256pages",
			pageDescription: "",
			canonicalUrl: "/case",
		},
		projects: ["PJ01","PJ02"],
	});
};
