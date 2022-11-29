import type { NextApiRequest, NextApiResponse } from "next";

interface contact {
  title: string;
  content: string;
}

export default (req: NextApiRequest, res: NextApiResponse<contact>) => {
	res.status(200).json({
		title: "256pages",
		content: "I am Edmond Yip"
	});
};