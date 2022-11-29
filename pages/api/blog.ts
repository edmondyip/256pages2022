import type { NextApiRequest, NextApiResponse } from "next";

interface blog {
	pageTitle: string;
	pageDescription: string;
	content: string;
}

export default (req:NextApiRequest, res:NextApiResponse<blog>) => {
  res.status(200).json({
    pageTitle: "256pages Blog",
    pageDescription: "",
    content: ""
  })
}