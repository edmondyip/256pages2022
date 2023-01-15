import type { NextApiRequest, NextApiResponse } from "next";
import { layout } from "types/layout";

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
        label: "Case",
        path: "/case"
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
		copyright: "256pages",
	});
};
