import type { NextApiRequest, NextApiResponse } from "next";

export interface navItem {
	label: string;
	path: string;
}

export interface layout {
	nav: navItem[];
	header: string;
	footer: string;
}

export default (
	req: NextApiRequest,
	res: NextApiResponse<layout>
) => {
	res.status(200).json({
		nav: [
			{
				label: "Home",
				path: "/home",
			},
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
