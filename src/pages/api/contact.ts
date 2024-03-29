import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface contactProps {
	content: pageContent;
	metaDescription: metaDescription;
}

const contactApi = (
	req: NextApiRequest,
	res: NextApiResponse<contactProps>
) => {
	res.status(200).json({
		content: {
			title: "256pages",
			content: "Feel free to contact me if you have any idea want to realize.",
		},
		metaDescription: {
			pageTitle: "Contact Me",
			pageDescription: "Contact Edmond Yip when you have any idea want to realize.",
			canonicalUrl: "/contact",
		},
	});
};

export default contactApi;
