import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface homeProps {
	content: pageContent;
	metaDescription: metaDescription;
}

export default (req: NextApiRequest, res: NextApiResponse<homeProps>) => {
	res.status(200).json({
		content: {
			title: "two hunderd and fifty six pages",
			content: "",
		},
		metaDescription: {
			pageTitle: "256pages - Edmond Yip Portfolio website",
			pageDescription: "Edmond Yip portfolio website",
			canonicalUrl: "/",
		},
	});
};
