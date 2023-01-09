import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface home {
	content: pageContent;
	metaDescription: metaDescription;
}

export default (req: NextApiRequest, res: NextApiResponse<home>) => {
	res.status(200).json({
		content: {
			title: "two hunderd and fifty six pages",
			content: "",
		},
		metaDescription: {
			pageTitle: "256pages",
			pageDescription: "edmond yip portfolio website",
			canonicalUrl: "/",
		},
	});
};
