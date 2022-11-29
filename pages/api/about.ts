import type { NextApiRequest, NextApiResponse } from "next";

interface data {
	title: string;
	content: string;
}

export default (req: NextApiRequest, res: NextApiResponse<data>) => {
	res.status(200).json({
		title: "About",
		content: "I am Edmond Yip",
	});
};
