import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { PageNavigator } from "components/navigator";
import { useGetLayoutQuery } from "store/feature/layout/layoutApi";
import Logo from "components/logo";
import Copyright from "components/copyright";
import { firaCode, bigShouldersDisplay } from "styles/fonts"

const ThemeSwitch = dynamic(() => import("components/themeSwitch"), {
	ssr: false,
});

interface IProps {
	children: ReactElement;
}

const Layout = ({ children }: IProps) => {
	const { data, isLoading, error } = useGetLayoutQuery();
	const { pathname } = useRouter();
	error && console.log(error);

	return (
		<>
			<header className="container mx-auto grid grid-cols-[min-content,1fr,min-content] items-center p-2">
				{isLoading ? <>loading</> : null}
				<Logo />
				{data ? <PageNavigator nav={data.nav} /> : null}
				<ThemeSwitch />
			</header>
			<main className={`${pathname === "/" ? "index" : "container mx-auto p-2"} ${bigShouldersDisplay.variable} ${firaCode.variable}`}>{children}</main>
			<footer>
				<Copyright />
			</footer>
		</>
	);
};

export default Layout;
