import type { NextApiRequest, NextApiResponse } from "next";

interface blogProps {
	pageTitle: string;
	pageDescription: string;
	content: string;
}

export default (req: NextApiRequest, res: NextApiResponse<blogProps>) => {
	res.status(200).json({
		pageTitle: "256pages Blog",
		pageDescription: "",
		content: "",
	});
};
