import type { NextApiRequest, NextApiResponse } from "next";
import { metaDescription, pageContent } from "types/layout";

interface worksProps {
	content: pageContent;
	metaDescription: metaDescription;
	works: work[];
}

export interface work {
	name: string;
	id: string;
	cover: string;
	video: string;
	url?: string;
	shortDescription: string;
	description: string;
	techStack: string;
	personalGrowth: string;
	challenges: string;
}

export default (req: NextApiRequest, res: NextApiResponse<worksProps>) => {
	res.status(200).json({
		content: {
			title: "works",
			content: "I developed over 100 websites in my career.",
		},
		metaDescription: {
			pageTitle: "works - 256pages",
			pageDescription: "",
			canonicalUrl: "/works",
		},
		works: [
			{
				name: "256pages",
				id: "256",
				cover: "/img/256pages.png",
				video: "video/256pages.mp4",
				url: "https://2017.256pages.com",
				shortDescription:
					"First personl website built by Javascript Framework.",
				description: "",
				techStack: "",
				personalGrowth: "",
				challenges: "",
			},
		],
	});
};
