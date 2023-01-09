import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { layout } from "types/layout";

export const layoutApi = createApi({
	reducerPath: "layoutApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.BASE_URL}/api/` }),
	endpoints: (build) => ({
		getLayout: build.query<layout, void>({
			query: () => "layout",
		}),
	}),
});

export const { useGetLayoutQuery } = layoutApi;
