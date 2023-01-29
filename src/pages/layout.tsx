import { useRouter } from "next/router";
import { useGetLayoutQuery } from "store/feature/layout/layoutApi";
import Copyright from "components/copyright";
import { firaCode, bigShouldersDisplay, oswald, outfit } from "styles/fonts";
import Background from "components/background";
import PageHeader from "components/PageHeader";

interface IProps {
	children: JSX.Element;
	router: string;
}

const Layout = ({ children, router }: IProps) => {
	const { data, isLoading, error } = useGetLayoutQuery();
	const { pathname } = useRouter();
	error && console.log(error);

	return (
		<div
			className={`layout ${router === "/" ? "index" : ""} ${
				bigShouldersDisplay.variable
			} ${firaCode.variable} ${oswald.variable} ${outfit.variable}`}
		>
			{isLoading ? <>loading</> : null}
			<PageHeader nav={data?.nav} path={pathname} />
			<main>{children}</main>
			<Background path={pathname} />
			<footer>
				<Copyright copy={data?.copyright} />
			</footer>
		</div>
	);
};

export default Layout;
