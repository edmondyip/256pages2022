import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface about {
	content: pageContent;
	metaDescription: metaDescription;
	history: pageContent;
}

export default (req: NextApiRequest, res: NextApiResponse<about>) => {
	res.status(200).json({
		content: {
			title: "about edmond",
			content:
				"Hi, i am a designer from Hong Kong. As my position is a full stack designer, that's mean i can design from graphic to user experience, also the front-end programming.\n When I design website UI for coder at the beginning, but they always create website exactly not i want. So I try to build it myself, from CSS / HTML to jquery. \n But jquery still have limitation. Performance problems and only can run at front-end, so i learn some php for layout templating. \n	After try to build some website with javascript frameworks. I think this is the way i want to extend. I build this website with full javascript framework, also with REST API for contact form.",
		},
		metaDescription: {
			pageTitle: "about edmond yip - 256pages",
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
