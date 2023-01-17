import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface worksProps {
	content: pageContent;
	metaDescription: metaDescription;
	projects: string[];
}

export default (req: NextApiRequest, res: NextApiResponse<worksProps>) => {
	res.status(200).json({
		content: {
			title: "works",
			content: "I developed over 100 websites in my career, let me show some cases",
		},
		metaDescription: {
			pageTitle: "works - 256pages",
			pageDescription: "",
			canonicalUrl: "/works",
		},
		projects: ["PJ01","PJ02"],
	});
};
