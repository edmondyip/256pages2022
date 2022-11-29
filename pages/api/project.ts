import type { NextApiRequest, NextApiResponse } from "next";

interface project {
  name: string;
  images: string[];
  description: string;
}

interface data {
	title: string;
	content: string;
  projects: project[]; 
}

export default (req: NextApiRequest, res: NextApiResponse<data>) => {
	res.status(200).json({
		title: "256pages",
		content: "I am Edmond Yip",
    projects: []
	});
};
