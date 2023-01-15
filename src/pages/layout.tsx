import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { PageNavigator } from "components/navigator";
import { useGetLayoutQuery } from "store/feature/layout/layoutApi";
import Logo from "components/logo";
import Copyright from "components/copyright";
import { firaCode, bigShouldersDisplay, oswald } from "styles/fonts";
import Background from "components/background";

const ThemeSwitch = dynamic(() => import("components/themeSwitch"), {
	ssr: false,
});

interface IProps {
	children: JSX.Element;
	router: string;
}

const Layout = ({ children, router }: IProps) => {
	const { data, isLoading, error } = useGetLayoutQuery();
	const { pathname } = useRouter();
	error && console.log(error);

	return (
		<div className={`layout ${router === "/" ? "index" : ""} ${bigShouldersDisplay.variable} ${firaCode.variable} ${oswald.variable}`}>
			<header className="container mx-auto grid grid-cols-[min-content,1fr,min-content] items-center p-2">
				{isLoading ? <>loading</> : null}
				<Logo />
				{data ? <PageNavigator nav={data.nav} /> : null}
				<ThemeSwitch />
			</header>
				<main>
					{children}
				</main>
				<Background path={pathname} />
			<footer>
				<Copyright copy={data?.copyright} />
			</footer>
		</div>
	);
};

export default Layout;
