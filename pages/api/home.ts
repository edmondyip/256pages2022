import type { NextApiRequest, NextApiResponse } from "next";

interface data {
	pageTitle: string;
  pageDescription: string;
  title: string;
	content: string;
}

export default (req: NextApiRequest, res: NextApiResponse<data>) => {
	res.status(200).json({
    pageTitle: "",
    pageDescription: "",
		title: "256pages",
		content: "I am Edmond Yip",
	});
};
