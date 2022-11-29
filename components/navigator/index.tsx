"use client";
import useSWR from "swr";
import { navItem } from "../../pages/api/layout";
import { PageNavigatorItem } from "./navigatorItem";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
interface IProps {
	data?: any;
}

export const PageNavigator = ({data}: IProps) => {
	// const { data, error } = useSWR("./api/layout", fetcher);

	return (
		<nav>
			{data ? (
				data.nav.map((item: navItem) => (
					<PageNavigatorItem
						key={item.label}
						label={item.label}
						path={item.path}
					/>
				))
			) : (
				<>loading</>
			)}
		</nav>
	);
};
