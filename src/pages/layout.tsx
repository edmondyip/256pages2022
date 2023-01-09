import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { PageNavigator } from "components/navigator";
import { useGetLayoutQuery } from "store/feature/layout/layoutApi";
import Logo from "components/logo";
import { useRouter } from "next/router";

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
			<header className="container mx-auto flex py-2">
				{isLoading ? <>loading</> : null}
				<Logo />
				{data ? <PageNavigator nav={data.nav} /> : null}
				<ThemeSwitch />
			</header>
			<main className={pathname === "/" ? "index" : "container mx-auto"}>{children}</main>
		</>
	);
};

export default Layout;
