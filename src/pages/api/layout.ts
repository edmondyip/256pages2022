import type { NextApiRequest, NextApiResponse } from "next";
import { layout } from "types/layout";

const layoutApi = (
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
        label: "Works",
        path: "/works"
      },
      {
        label: "Contact",
        path: "/contact",
      },
      {
        label: "Blog",
        path: "https://blog.256pages.com"
      }
		],
		header: "header",
		copyright: "256pages",
	});
};

export default layoutApi;