import type { NextApiRequest, NextApiResponse } from "next";
import { layout } from "../../types/layout";

export default (
	req: NextApiRequest,
	res: NextApiResponse<layout>
) => {
	res.status(200).json({
		nav: [
      {
        label: "About",
        path: "/about"
      },
      {
        label: "Project",
        path: "/project"
      },
      {
        label: "Contact",
        path: "/contact",
      },
      {
        label: "Blog",
        path: "/blog"
      }
		],
		header: "header",
		footer: "footer",
	});
};
