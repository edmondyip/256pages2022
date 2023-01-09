import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface contact {
  content: pageContent,
	metaDescription: metaDescription
}

export default (req: NextApiRequest, res: NextApiResponse<contact>) => {
	res.status(200).json({
		content: {
			title: "256pages",
			content: "Feel free to contact me if you have any idea want to realize."
		},
		metaDescription: {
			pageTitle: "Contact Me",
			pageDescription: "",
			canonicalUrl: "/contact"
		}
	});
};